const { Router } = require('express')
const UserController = require('./controllers/UseController')

const routes = Router()

routes.post('/user', UserController.store)

module.exports = routes
