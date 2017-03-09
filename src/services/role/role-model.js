'use strict'

// Dependencies
const Sequelize = require('sequelize')

// Model
module.exports = function (sequelize) {
  const role = sequelize.define(
    'roles',
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
      classMethods: {
        associate () {
          const { roles, users } = sequelize.models

          roles.belongsToMany(users, {
            through: 'roles_users',
            timestamps: false
          })
          users.belongsToMany(roles, {
            through: 'roles_users',
            timestamps: false
          })
        }
      }
    }
  )

  return role
}
