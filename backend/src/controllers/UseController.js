const User = require('../model/UserModel')

module.exports = {
  async show (req, res) {
    try {
      const response = await User.findAll()
      res.json(response).status(200)
    } catch (error) {
      console.error('Erro in find users', +error)
    }
  },
  async store (req, res) {
    const { name } = req.body
    try {
      var response = await User.findAll({
        where: {
          name
        }
      })
      if (response === null || response.length === 0) {
        const responseData = await User.create({ name })
        return res.json(responseData).status(200)
      }
      return res.status(400).json({ message: 'this username is already used' })
    } catch (error) {
      console.error('Erro ao salvar', +error)
    }
  }
}
