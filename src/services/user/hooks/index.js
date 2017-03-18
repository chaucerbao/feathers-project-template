'use strict'

// Dependencies
const hooks = require('feathers-hooks')
const auth = require('feathers-authentication').hooks
const roles = require('../../role/hooks')

// Before
exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    roles.attach()
  ],
  find: [],
  get: [],
  create: [auth.hashPassword()],
  update: [auth.hashPassword()],
  patch: [auth.hashPassword()],
  remove: []
}

// After
exports.after = {
  all: [hooks.remove('password')],
  find: [],
  get: [],
  create: [roles.save()],
  update: [roles.save()],
  patch: [roles.save()],
  remove: []
}
