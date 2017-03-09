'use strict'

// Dependencies
const handler = require('feathers-errors/handler')
const logger = require('./logger')
const notFound = require('./not-found-handler')

// Middleware
module.exports = function () {
  const app = this

  app.use(notFound())
  app.use(logger(app))
  app.use(handler())
}
