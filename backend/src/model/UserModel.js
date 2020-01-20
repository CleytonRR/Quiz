const driver = require('../config/db/driver')
const Sequelize = require('sequelize')

const User = driver.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  count: {
    type: Sequelize.INTEGER
  }
})

module.exports = User
