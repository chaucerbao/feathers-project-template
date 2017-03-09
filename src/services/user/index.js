'use strict'

// Dependencies
const service = require('feathers-sequelize')
const user = require('./user-model')
const hooks = require('./hooks')

// Service
module.exports = function () {
  const app = this

  const options = {
    Model: user(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  }

  // Initialize the service
  app.use('/users', service(options))

  const userService = app.service('/users')

  // Bind hooks
  userService.before(hooks.before)
  userService.after(hooks.after)
}
