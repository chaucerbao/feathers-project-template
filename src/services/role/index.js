'use strict'

// Dependencies
const service = require('feathers-sequelize')
const role = require('./role-model')
const hooks = require('./hooks')

// Service
module.exports = function () {
  const app = this

  const options = {
    Model: role(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  }

  // Initialize the service
  app.use('/roles', service(options))

  const roleService = app.service('/roles')

  // Bind hooks
  roleService.before(hooks.before)
  roleService.after(hooks.after)
}
