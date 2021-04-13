const formats = ['ms', 's', 'm', 'h', 'd']
const degreeOfChange = ['1000', '60', '60', '24']

function getPrintableTime(timeDiff) {
	let printTime = timeDiff
	let printTimeFormat = 0
	let printTimeDegree = 0
	let noMoreFormats = false

	while (printTime / degreeOfChange[printTimeDegree] >= 1 && !noMoreFormats) {
		if (formats[printTimeFormat] !== 'd') {
			printTimeFormat += 1
		}

		printTime = (printTime / degreeOfChange[printTimeDegree]).toFixed(3)

		if (formats[printTimeFormat] !== 'd') {
			printTimeDegree += 1
		} else {
			noMoreFormats = true
		}
	}

	return `${printTime}${formats[printTimeFormat]}`
}

module.exports = getPrintableTime
