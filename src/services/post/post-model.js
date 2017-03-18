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
          const { posts, taggables, tags, users } = sequelize.models

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

          posts.belongsTo(users)
        }
      }
    }
  )

  return post
}
