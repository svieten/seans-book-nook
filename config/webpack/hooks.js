const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')
const openBrowser = require('react-dev-utils/openBrowser')
const colors = require('colors')
const lib = require('../lib')

const { getPrintableTime, logType } = lib

module.exports = type => {
	const preLogType = logType(type, 'webpk')
	let hasOpened = false

	return {
		beforeCompile() {
			console.log(preLogType, 'Compiling...')
		},
		done(stats) {
			const rawMessages = stats.toJson({}, true)
			const newMessages = formatWebpackMessages(rawMessages)

			const { errors, warnings } = newMessages

			const tookTime = stats.endTime - stats.startTime
			const printTime = getPrintableTime(tookTime)

			if (errors.length || warnings.length) {
				if (errors.length) {
					console.log(
						preLogType,
						colors.red(`Compiled with ${errors.length} errors:`)
					)
					errors.forEach(e => console.log(`${e}\n`))
				}

				if (warnings.length) {
					console.log(
						preLogType,
						colors.yellow(
							`Compiled with ${warnings.length} warnings:`
						)
					)
					warnings.forEach(w => console.log(`${w}\n`))
				}
			} else {
				if (!hasOpened && type === 'ui') {
					hasOpened = true
					openBrowser('http://localhost:3000')
				}
				console.log(
					preLogType,
					`${colors.green('Compiled Successfully')} ${colors.gray(
						`(took ${printTime})`
					)}`
				)
			}
		}
	}
}
