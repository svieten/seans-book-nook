const lintJS = require('./js.js')
const lintCSS = require('./css.js')

const jsFlags =
	process.argv.includes('--js-only') || process.argv.includes('-j')
const styleFlags =
	process.argv.includes('--styles-only') || process.argv.includes('-s')

const shouldFix = process.argv.includes('--fix')

const shouldJS = jsFlags || (!jsFlags && !styleFlags)
const shouldStyle = styleFlags || (!jsFlags && !styleFlags)

if (shouldJS) {
	console.log('Linting JS')
	lintJS(shouldFix)
}

if (shouldStyle) {
	console.log('Linting CSS')
	lintCSS(shouldFix)
}
