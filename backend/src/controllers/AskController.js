const Ask = require('../model/AskModel')

module.exports = {
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
