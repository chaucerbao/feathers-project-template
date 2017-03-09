'use strict'

// Dependencies
const test = require('ava')

// Test subject
const app = require('../../../src/app')
const service = app.service('users')

// Tests
test('User service is registered', t => {
  t.truthy(service)
})
