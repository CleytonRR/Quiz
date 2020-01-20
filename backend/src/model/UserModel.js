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

async function SyncDd (User) {
  try {
    User = await User.sync()
    return User
  } catch (error) {
    console.error('Erro ao sincronizar: ' + error)
  }
}

module.exports = User
