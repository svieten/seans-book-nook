const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const uiConfig = require('./ui')
const serverConfig = require('./server')
const lib = require('../lib')

const { logType } = lib

module.exports = () => {
	const serverCompiler = Webpack(serverConfig)
	const uiCompiler = Webpack(uiConfig)
	const watchers = []

	watchers.push({
		type: 'server',
		subType: 'webpk',
		watch: serverCompiler.watch(serverCompiler.watchOptions || {}, () => {})
	})

	const server = new WebpackDevServer(uiCompiler, uiConfig.devServer || {})
	server.listen(uiConfig.devServer.port || 8080)

	watchers.push({
		type: 'ui',
		subType: 'webpk',
		watch: server
	})

	process.on('SIGINT', () => {
		const promises = []

		watchers.forEach(watcher => {
			promises.push(
				new Promise(resolve => {
					watcher.watch.close(() => {
						console.log(
							logType(watcher.type, watcher.subType),
							'Terminated.'
						)
						resolve()
					})
				})
			)
		})
		Promise.all(promises).then(() => {
			process.exit(0)
		})
	})
}
