'use strict'

exports.default = function (options) {
  return function (hook) {
    const sequelize = hook.app.get('sequelize')
    const { tags } = sequelize.models

    hook.params.sequelize = {
      include: [{ model: tags, through: { attributes: [] } }]
    }
  }
}
