const colors = require('colors')

function logType(type, subType) {
	let typePadding = ''
	let subTypePadding = ''
	let typeColor = ''
	let subTypeColor = ''

	switch (type) {
		case 'ui':
			typeColor = 'bgMagenta'
			typePadding = '    '
			break
		case 'server':
			typeColor = 'bgBlue'
			typePadding = '    '
			break
		default:
			typeColor = 'bgWhite'
			typePadding = '    '
			break
	}

	switch (subType) {
		case 'log':
			subTypeColor = 'bgWhite'
			subTypePadding = '    '
			break
		case 'tests':
			subTypeColor = 'bgYellow'
			subTypePadding = '    '
			break
		case 'webpk':
			subTypeColor = 'bgCyan'
			subTypePadding = '    '
			break
		default:
			subTypeColor = 'bgWhite'
			subTypePadding = '    '
			break
	}

	return `${colors[typeColor].black(
		`${typePadding}${type.toUpperCase()}${typePadding}`
	)}${colors[subTypeColor].black(
		`${subTypePadding}${subType.toUpperCase()}${subTypePadding}`
	)}`
}

module.exports = logType
