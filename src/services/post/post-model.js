'use strict'

// Dependencies
const Sequelize = require('sequelize')

// Model
module.exports = function (sequelize) {
  const post = sequelize.define(
    'posts',
    {
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      body: {
        type: Sequelize.TEXT,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      classMethods: {
        associate () {
          const { taggables, tags, posts } = sequelize.models

          posts.belongsToMany(tags, {
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

  return post
}
