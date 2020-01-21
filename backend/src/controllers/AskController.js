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
      const response = await Ask.create({
        ask,
        answer,
        choices
      })
      return res.json(response)
    } catch (error) {
      console.error('error saving question: ', +error)
    }
  }
}
