'use strict'

// Dependencies
const auth = require('feathers-authentication').hooks
const tags = require('../../tag/hooks')

// Before
exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    tags.attach()
  ],
  find: [],
  get: [],
  create: [auth.associateCurrentUser()],
  update: [],
  patch: [],
  remove: []
}

// After
exports.after = {
  all: [],
  find: [],
  get: [],
  create: [tags.save()],
  update: [tags.save()],
  patch: [tags.save()],
  remove: []
}
