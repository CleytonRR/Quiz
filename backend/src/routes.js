const { Router } = require('express')
const UserController = require('./controllers/UseController')
const AskController = require('./controllers/AskController')

const routes = Router()

routes.post('/user', UserController.store)
routes.post('/ask', AskController.store)

module.exports = routes
