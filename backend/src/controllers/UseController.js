const User = require('../model/UserModel')

module.exports = {
  async store (req, res) {
    const { name } = req.body
    try {
      const responseData = await User.create({ name })
      return res.json(responseData)
    } catch (error) {
      console.error('Erro ao salvar', +error)
    }
  }
}
