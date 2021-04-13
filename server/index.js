const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const http = require('http')
const path = require('path')

const cors = require('cors')

const server = express()

server.use(cookieParser())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(cors())

const port = process.env.PORT || 4000

server.get('/sean', (req, res) => {
	res.send('My Name is Sean!')
})

console.log('location: ', __dirname)

if (process.env.NODE_ENV === 'local') {
	console.log('In dev express')
	// server.use(express.static(path.join(__dirname)))
	console.log('In between')
	server.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '', 'dev-index.html'))
	})

	http.createServer({}, server).listen(port, () => {
		console.log(`Server in Dev mode listening on ${port}`)
	})
} else {
	console.log('In Prod')
	server.use(express.static(path.join(__dirname, '../dist')))
	server.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '../dist', 'index.html'))
	})

	server.listen(port, () => {
		console.log('Environment: ', process.env.NODE_ENV)
		console.log(`Listening on port ${port}`)
	})
}
