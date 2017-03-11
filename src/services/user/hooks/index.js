'use strict'

// Dependencies
const hooks = require('feathers-hooks')
const auth = require('feathers-authentication').hooks
const roles = require('../../role/hooks')

// Before
exports.before = {
  all: [roles.attach()],
  find: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  get: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({ ownerField: 'id' })
  ],
  create: [auth.hashPassword()],
  update: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({ ownerField: 'id' })
  ],
  patch: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({ ownerField: 'id' })
  ],
  remove: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated(),
    auth.restrictToOwner({ ownerField: 'id' })
  ]
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
