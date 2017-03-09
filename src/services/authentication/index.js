'use strict'

// Dependencies
const authentication = require('feathers-authentication')

// Service
module.exports = function () {
  const app = this

  let config = app.get('auth')

  app.configure(authentication(config))
}
