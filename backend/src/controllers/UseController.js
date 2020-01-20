const User = require('../model/UserModel')

module.exports = {
  async store (req, res) {
    const { name } = req.body
    try {
      var user = await User.findOne({ name })
      if (!user) {
        const response = await User.create({ name })
        return res.json(response)
      }

      return res.json(user)
    } catch (error) {
      console.error('Erro ao salvar', +error)
    }
  }
}
