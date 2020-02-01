const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const helmet = require('helmet')

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(routes)

module.exports = app
