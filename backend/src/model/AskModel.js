const driver = require('../config/db')
const sequelize = require('sequelize')

const Ask = driver.define({
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

function syncDb (table) {
  table.sync()
  return table
}

module.exports = syncDb(Ask)
