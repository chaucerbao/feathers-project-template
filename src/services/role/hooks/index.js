'use strict'

// Dependencies
const auth = require('feathers-authentication').hooks
const attach = require('./attach').default
const save = require('./save').default

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
exports.save = save
