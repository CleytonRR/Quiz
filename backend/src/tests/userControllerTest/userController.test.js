/* eslint-env mocha */
const assert = require('assert')
const request = require('supertest')
const api = require('../../index')
const User = require('../../model/UserModel')

var mockTest = {
  name: 'Cleyton Rodrigues'
}

var creationMock = {
  name: 'MaryKay'
}

var id = ''

describe('Test Suite of users', function () {
  this.afterAll(function () {
    User.destroy({
      where: {
        id
      }
    })
  })
  it('POST/user -> ensure creation of user', async () => {
    const result = await request(api).post('/user').send(creationMock).set('Accept', 'applicatin/json')
    id = result.body.id
    assert.deepStrictEqual(creationMock.name, result.body.name)
    assert.deepStrictEqual(result.statusCode, 200)
  })
  it('POST/user -> ensure creation of  a user per name ', async () => {
    const result = await request(api).post('/user').send(mockTest).set('Accept', 'aplication/json')
    assert.deepStrictEqual('this username is already used', result.body.message)
    assert.ok(result.statusCode === 400)
  })
  it('GET/user -> return a list(array) of users', async () => {
    const result = await request(api).get('/user')
    assert.deepStrictEqual(200, result.statusCode)
    assert.ok(Array.isArray(result.body) === true)
    assert.deepStrictEqual(mockTest.name, result.body[0].name)
  })

  it('GET/user:name -> verify if username already used', async () => {
    const result = await request(api).get('/user/q')
    console.log(result.statusCode)
    console.log(result.body)
    assert.deepStrictEqual(200, result.statusCode)
    assert.deepStrictEqual('username ok', result.body.message)
  })
})
