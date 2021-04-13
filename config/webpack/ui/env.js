const path = require('path')
const dotenv = require('dotenv')

dotenv.config({ path: path.resolve(__dirname, '../../../.env'), silent: true })

let env = JSON.stringify('production')

if (process.argv.includes('--dev') || process.argv.includes('-d')) {
	console.log('Setting env to local')
	env = JSON.stringify('local')
}

module.exports = {
	aliases: {
		src: path.resolve(__dirname, '../../../src'),
		containers: path.resolve(__dirname, '../../../src/containers'),
		components: path.resolve(__dirname, '../../../src/components'),
		actions: path.resolve(__dirname, '../../../src/actions'),
		reducers: path.resolve(__dirname, '../../../src/reducers'),
		types: path.resolve(__dirname, '../../../src/types')
	},
	environment: {
		NODE_ENV: env,
		BASE_URL: JSON.stringify(process.env.BASE_URL || 'false'),
		VERSION_CONTROL: JSON.stringify(process.env.VERSION_CONTROL)
	}
}
