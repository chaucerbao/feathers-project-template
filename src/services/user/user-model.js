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
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      classMethods: {
        associate () {
          const { users, posts, roles } = sequelize.models

          users.belongsToMany(roles, {
            through: 'roles_users',
            timestamps: false
          })

          users.hasMany(posts)
        }
      }
    }
  )

  return user
}
