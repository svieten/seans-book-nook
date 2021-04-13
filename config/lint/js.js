const { CLIEngine } = require('eslint')

module.exports = fix => {
	const cli = new CLIEngine({
		extensions: ['.js', '.jsx'],
		fix
	})

	const report = cli.executeOnFiles(['.'])

	const formatter = cli.getFormatter()

	if (fix) {
		CLIEngine.outputFixes(report)
	}
	console.log(formatter(report.results))

	const errCount = report.errorCount
	const warnCount = report.warningCount
	const fixableErrCount = report.fixableErrorCount
	const fixableWarnCount = report.fixableWarningCount

	if (fix) {
		if (
			errCount - fixableErrCount > 0 ||
			warnCount - fixableWarnCount > 0
		) {
			process.exit(1)
		}
	} else if (errCount || warnCount) {
		process.exit(1)
	}
}
