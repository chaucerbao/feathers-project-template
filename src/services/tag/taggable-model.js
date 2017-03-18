'use strict'

// Dependencies
const Sequelize = require('sequelize')

// Model
module.exports = function (sequelize) {
  const taggable = sequelize.define(
    'taggables',
    {
      tag_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: 'taggable_models'
      },
      taggable: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: 'taggable_models'
      },
      taggable_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: 'taggable_models'
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  )

  return taggable
}
