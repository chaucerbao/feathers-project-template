'use strict'

// Dependencies
const test = require('ava')

// Test subject
const app = require('../../../src/app')
const service = app.service('posts')

// Tests
test('Post service is registered', t => {
  t.truthy(service)
})
