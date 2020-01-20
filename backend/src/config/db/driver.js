const Sequelize = require('sequelize')

const driver = new Sequelize('quiz', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = driver