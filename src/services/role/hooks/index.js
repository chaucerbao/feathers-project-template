'use strict'

// Dependencies
const auth = require('feathers-authentication').hooks
const attach = require('./attach').default

// Before
exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
}

// After
exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
}

// Hooks
exports.attach = attach
