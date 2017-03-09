'use strict'

// Dependencies
const Sequelize = require('sequelize')

// Model
module.exports = function (sequelize) {
  const user = sequelize.define(
    'users',
    {
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      freezeTableName: true
    }
  )

  user.sync()

  return user
}
