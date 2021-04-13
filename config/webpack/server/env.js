const path = require('path')
const dotenv = require('dotenv')

dotenv.config({ path: path.resolve(__dirname, '../../../.env'), silent: true })

let index = null

console.log('Hello from before the if')
if (process.argv.includes('--dev') || process.argv.includes('-d')) {
	console.log('In Dev!')
	index = JSON.stringify('public/dev-index.html')
}

module.exports = {
	aliases: {},
	environment: {
		INDEX: index,
		BASE_URL: JSON.stringify(process.env.BASE_URL || 'false'),
		LOCAL_BUILD: JSON.stringify(process.env.LOCAL_BUILD),
		NODE_ENV: JSON.stringify(process.env.NODE_ENV)
	}
}
