const lint = require('stylelint')

module.exports = fix => {
	lint({
		files: ['src/**/*.scss', 'src/**/*.sass', 'src/**/*.css'],
		formatter: 'string',
		fix
	})
		.then(data => {
			console.log(data.output)

			if (data.errored) {
				process.exit(1)
			}
		})
		.catch(e => {
			console.error(e.stack)
			process.exit(1)
		})
}
