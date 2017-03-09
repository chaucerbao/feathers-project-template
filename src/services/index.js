'use strict'

// Dependencies
const Sequelize = require('sequelize')
const authentication = require('./authentication')
const user = require('./user')

// Services
module.exports = function () {
  const app = this

  // Connect to the database
  const sequelize = new Sequelize(app.get('postgres'), {
    dialect: 'postgres',
    logging: false
  })

  app.set('sequelize', sequelize)

  // Register the services
  app.configure(authentication)
  app.configure(user)

  // Associate related models
  Object.keys(sequelize.models).forEach(function (modelName) {
    if (sequelize.models[modelName].associate) {
      sequelize.models[modelName].associate(sequelize.models)
    }
  })

  sequelize.sync()
}
