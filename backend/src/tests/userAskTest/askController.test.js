/* eslint-env mocha */
const request = require('supertest')
const assert = require('assert')
const app = require('../../index')

var askMock = {
  ask: 'Quem criou o teorema de pitagoras'
}

describe('Suite test for Ask Controll', function () {
  it('Ensure the return of a list of questions', async () => {
    const response = await request(app).get('/ask')
    assert.ok(response.statusCode === 200)
    assert.ok(Array.isArray(response.body) === true)
    assert.deepStrictEqual(askMock.ask, response.body[0].ask)
  })
})
