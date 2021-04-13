const webpackDev = require('./dev')
const webpackProd = require('./prod')

if (process.argv.includes('--dev') || process.argv.includes('-d')) {
	console.log('running dev')
	webpackDev()
} else {
	webpackProd()
}
