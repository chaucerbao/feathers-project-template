'use strict'

// Dependencies
const winston = require('winston')

// Logger
module.exports = function (app) {
  app.logger = winston

  return function (error, req, res, next) {
    if (error) {
      const message = `${error.code ? `(${error.code}) ` : ''}Route: ${req.url} - ${error.message}`

      if (error.code === 404) {
        winston.info(message)
      } else {
        winston.error(message)
        winston.info(error.stack)
      }
    }

    next(error)
  }
}
