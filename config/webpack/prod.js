const Webpack = require('webpack')
const _ = require('lodash')
const uiConfig = require('./ui')
const serverConfig = require('./server')
const lib = require('../lib')

const { getPrintableTime } = lib

function runWebpack(type, wpconfig) {
	const compiler = Webpack(wpconfig)

	console.log(`Webpack ${type}: Compiling...`)

	compiler.run((err, wpstats) => {
		const start = wpstats.startTime
		const end = wpstats.endTime

		const compilationTime = getPrintableTime(end - start)
		if (err || _.get(wpstats, 'compilation.errors', []).length > 0) {
			if (err) {
				console.log(
					`Webpack ${type}: Failed to compile. Took: ${compilationTime}\n`,
					err
				)
			} else {
				console.log(
					`Webpack ${type}: Failed to compile. Took: ${compilationTime}\n`
				)
				_.forEach(wpstats.compilation.errors, error => {
					console.log(`Webpack ${type}: `, error)
				})
			}

			process.exit(1)
		} else {
			console.log('Webpack compiled successfully')
		}
	})
}

module.exports = () => {
	runWebpack('SERVER', serverConfig)
	runWebpack('SERVER', uiConfig)
}
