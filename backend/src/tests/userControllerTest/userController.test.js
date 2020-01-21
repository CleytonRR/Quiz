/* eslint-env mocha */
const assert = require('assert')
const request = require('supertest')
const api = require('../../index')

var mockTest = {
  name: 'Cleyton Rodrigues'
}

describe('Test Suite of users', function () {
  it('GET/user -> return a list of users', async () => {
    const result = await request(api).get('/user')
    assert.deepStrictEqual(200, result.statusCode)
    assert.deepStrictEqual(mockTest.name, result.body[0].name)
  })
})
