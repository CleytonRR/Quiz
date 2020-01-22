/* eslint-env mocha */
const request = require('supertest')
const assert = require('assert')
const Ask = require('../../model/AskModel')
const app = require('../../index')

var askMock = {
  ask: 'Quem criou o teorema de Pitágoras'
}

var askMockCreate = {
  ask: 'Quem idealizou o Calculo de tres variaveis?',
  answer: 'Newton',
  choices: 'Newton, Platão, Aristoteles, Gauss'
}
var id = ''
describe('Suite test for Ask Controll', function () {
  this.afterAll(function () {
    Ask.destroy({
      where: {
        id
      }
    })
  })

  it('GET/ask -> Ensure the return of a list of questions', async () => {
    const response = await request(app).get('/ask')
    assert.ok(response.statusCode === 200)
    assert.ok(Array.isArray(response.body) === true)
    assert.deepStrictEqual(askMock.ask, response.body[0].ask)
  })

  it('POST/ask -> Ensure creation of new asks', async () => {
    const response = await request(app).post('/ask').send(askMockCreate).set('Accept', 'applicatin/json')
    id = response.body.id
    assert.deepStrictEqual(askMockCreate.ask, response.body.ask)
    assert.ok(response.statusCode === 200)
  })

  it('POST/ask -> ensure that unique questions', async () => {
    const response = await request(app).post('/ask').send(askMockCreate).set('Accept', 'application/json')
    assert.deepStrictEqual('This question already exists!', response.body.message)
    assert.ok(response.statusCode === 400)
  })
})
