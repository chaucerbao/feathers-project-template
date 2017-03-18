'use strict'

// Dependencies
const Sequelize = require('sequelize')

// Model
module.exports = function (sequelize) {
  const tag = sequelize.define(
    'tags',
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
          const { taggables, tags, users } = sequelize.models

          tags.belongsToMany(users, {
            through: {
              model: taggables,
              unique: false
            },
            foreignKey: 'tag_id'
          })
          users.belongsToMany(tags, {
            through: {
              model: taggables,
              unique: false,
              scope: {
                taggable: 'post'
              }
            },
            foreignKey: 'taggable_id',
            constraints: false
          })
        }
      }
    }
  )

  return tag
}
