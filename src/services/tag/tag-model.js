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
          const { taggables, tags, posts } = sequelize.models

          tags.belongsToMany(posts, {
            through: {
              model: taggables,
              unique: false
            },
            foreignKey: 'tag_id'
          })
        }
      }
    }
  )

  return tag
}
