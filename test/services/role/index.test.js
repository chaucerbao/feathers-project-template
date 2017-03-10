'use strict'

// Dependencies
const test = require('ava')

// Test subject
const app = require('../../../src/app')
const service = app.service('roles')

// Tests
test('Role service is registered', t => {
  t.truthy(service)
})
