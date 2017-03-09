'use strict'

// Dependencies
const authentication = require('./authentication')
const user = require('./user')
const Sequelize = require('sequelize')

// Services
module.exports = function () {
  const app = this

  const sequelize = new Sequelize(app.get('postgres'), {
    dialect: 'postgres',
    logging: false
  })
  app.set('sequelize', sequelize)

  app.configure(authentication)
  app.configure(user)
}
