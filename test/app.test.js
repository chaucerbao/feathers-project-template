'use strict'

// Dependencies
const test = require('ava')
const fetch = require('node-fetch')

// Test subject
const app = require('../src/app')

// Setup and teardown
let server

test.cb.before(t => {
  server = app.listen(3030, t.end)
})

test.cb.after(t => {
  server.close(t.end)
})

// Tests
test('Shows the index page', async t => {
  const response = await fetch('http://localhost:3030')
  const responseBody = await response.text()

  t.not(responseBody.indexOf('<html>'), -1)
})

test('Shows the 404 response in JSON', async t => {
  const response = await fetch('http://localhost:3030/does/not/exist')
  const responseBody = await response.json()

  t.is(response.status, 404)
  t.is(responseBody.code, 404)
})
