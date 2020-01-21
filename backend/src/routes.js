const { Router } = require('express')
const UserController = require('./controllers/UseController')
const AskController = require('./controllers/AskController')

const routes = Router()

routes.post('/user', UserController.store)
routes.get('/user', UserController.show)
routes.post('/ask', AskController.store)
routes.get('/ask', AskController.show)

module.exports = routes
