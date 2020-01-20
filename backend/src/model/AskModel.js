const driver = require('../config/db/driver')
const sequelize = require('sequelize')

const Ask = driver.define('ask', {
  ask: {
    type: sequelize.STRING,
    allowNull: false
  },
  answer: {
    type: sequelize.STRING,
    allowNull: false
  },
  choices: {
    type: sequelize.STRING,
    allowNull: false
  }
})

module.exports = Ask
