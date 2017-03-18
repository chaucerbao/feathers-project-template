'use strict'

// Dependencies
const service = require('feathers-sequelize')
const post = require('./post-model')
const hooks = require('./hooks')

// Service
module.exports = function () {
  const app = this

  const options = {
    Model: post(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  }

  // Initialize the service
  app.use('/posts', service(options))

  const postService = app.service('/posts')

  // Bind hooks
  postService.before(hooks.before)
  postService.after(hooks.after)
}
