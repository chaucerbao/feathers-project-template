'use strict'

// Dependencies
const service = require('feathers-sequelize')
const tag = require('./tag-model')
const taggable = require('./taggable-model')
const hooks = require('./hooks')

// Service
module.exports = function () {
  const app = this

  const options = {
    Model: tag(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  }

  // Register the polymorphic table
  taggable(app.get('sequelize'))

  // Initialize the service
  app.use('/tags', service(options))

  const tagService = app.service('/tags')

  // Bind hooks
  tagService.before(hooks.before)
  tagService.after(hooks.after)
}
