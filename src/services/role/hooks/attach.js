'use strict'

exports.default = function (options) {
  return function (hook) {
    const sequelize = hook.app.get('sequelize')
    const { roles } = sequelize.models

    hook.params.sequelize = {
      include: [{ model: roles, through: { attributes: [] } }]
    }
  }
}
