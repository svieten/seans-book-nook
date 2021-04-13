const shelljs = require('shelljs')
const { merge } = require('webpack-merge')
const devConfig = require('./dev')
const prodConfig = require('./prod')
let config = require('./config')

if (process.argv.includes('--dev') || process.argv.includes('-d')) {
	config = merge(config, devConfig)
} else {
	shelljs.rm('rf', 'dist/build')
	config = merge(config, prodConfig)
}

module.exports = config
