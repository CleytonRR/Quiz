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

  async showOne (req, res) {
    console.log(req.params.name)
    try {
      const response = await User.findOne({
        where: {
          name: req.params.name
        }
      })
      if (Number(response) === 0) {
        return res.status(200).json({ message: 'username ok' })
      }
      res.status(400).json({ message: 'Username already' })
    } catch (error) {
      console.error('Erro in find a user', +error)
    }
  },
  async store (req, res) {
    const { name, count } = req.body
    try {
      var response = await User.findAll({
        where: {
          name
        }
      })
      if (response === null || response.length === 0) {
        const responseData = await User.create({ name, count })
        return res.json(responseData).status(200)
      }
      return res.status(400).json({ message: 'this username is already used' })
    } catch (error) {
      console.error('Erro ao salvar', +error)
    }
  }
}
