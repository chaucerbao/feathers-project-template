'use strict'

// Dependencies
const errors = require('feathers-errors')

// Not found
module.exports = function () {
  return function (req, res, next) {
    next(new errors.NotFound('Page not found'))
  }
}
