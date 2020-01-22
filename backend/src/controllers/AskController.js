const Ask = require('../model/AskModel')

module.exports = {
  async show (req, res) {
    try {
      const response = await Ask.findAll()
      res.json(response).status(200)
    } catch (error) {
      console.error('Erro find asks', +error)
    }
  },
  async store (req, res) {
    const { ask, answer, choices } = req.body
    try {
      const responseData = await Ask.findAll({
        where: {
          ask
        }
      })
      if (responseData === null || responseData.length === 0) {
        const response = await Ask.create({
          ask,
          answer,
          choices
        })
        return res.json(response).status(200)
      }
      return res.status(400).json({ message: 'This question already exists!' })
    } catch (error) {
      console.error('error saving question: ', +error)
    }
  }
}
