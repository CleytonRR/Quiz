/* eslint-env mocha */
const request = require('supertest')
const assert = require('assert')
const app = require('../../index')

var askMock = {
  ask: 'Quem criou o teorema de pitagoras'
}

var askMockCreate = {
  ask: 'Quem idealizou o Calculo?',
  answer: 'Newton',
  choices: 'Newton, Platão, Aristoteles, Gauss'
}

describe('Suite test for Ask Controll', function () {
  it('GET/ask -> Ensure the return of a list of questions', async () => {
    const response = await request(app).get('/ask')
    assert.ok(response.statusCode === 200)
    assert.ok(Array.isArray(response.body) === true)
    assert.deepStrictEqual(askMock.ask, response.body[0].ask)
  })

  it.only('POST/ask -> Ensure creation of new asks', async () => {
    const response = await request(app).post('/ask').send(askMockCreate).set('Accept', 'applicatin/json')
    assert.deepStrictEqual(askMockCreate.ask, response.body.ask)
    assert.ok(response.statusCode === 200)
  })
})
