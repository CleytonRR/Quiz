/* eslint-env mocha */
const assert = require('assert')
const request = require('supertest')
const api = require('../../index')

var mockTest = {
  name: 'Cleyton Rodrigues'
}

var creationMock = {
  name: 'Michal'
}

describe('Test Suite of users', function () {
  it('POST/user -> ensure creation of user', async () => {
    const result = await request(api).post('/user').send(creationMock).set('Accept', 'applicatin/json')
    assert.deepStrictEqual(creationMock.name, result.body[0].name)
    assert.deepStrictEqual(result.statusCode, 200)
  })
  it('POST/user -> ensure creation of  a user per name ', async () => {
    const result = await request(api).post('/user').send(mockTest).set('Accept', 'aplication/json')
    assert.deepStrictEqual(mockTest.name, result.body[0].name)
    assert.ok(result.statusCode === 200)
  })
  it('GET/user -> return a list(array) of users', async () => {
    const result = await request(api).get('/user')
    assert.deepStrictEqual(200, result.statusCode)
    assert.ok(Array.isArray(result.body) === true)
    assert.deepStrictEqual(mockTest.name, result.body[0].name)
  })
})
