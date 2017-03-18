'use strict'

// Dependencies
const Sequelize = require('sequelize')

// Services
const authentication = require('./authentication')
const post = require('./post')
const role = require('./role')
const tag = require('./tag')
const user = require('./user')

module.exports = function () {
  const app = this

  // Connect to the database
  const database = app.get('database')
  const sequelize = new Sequelize(database, {
    dialect: database.split(':')[0],
    logging: false
  })

  // Attach Sequelize to the application
  app.set('sequelize', sequelize)

  // Register the services
  app.configure(authentication)
  app.configure(post)
  app.configure(role)
  app.configure(tag)
  app.configure(user)

  // Associate related models
  Object.keys(sequelize.models).forEach(function (modelName) {
    if (sequelize.models[modelName].associate) {
      sequelize.models[modelName].associate(sequelize.models)
    }
  })

  sequelize.sync()
}
