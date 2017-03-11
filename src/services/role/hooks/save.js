'use strict'

exports.default = function (options) {
  return async function (hook) {
    const sequelize = hook.app.get('sequelize')
    const { roles: Role } = sequelize.models
    const model = hook.result

    const roles = await Role.findAll({
      where: {
        name: {
          $in: hook.data.roles
        }
      },
      through: { attributes: [] }
    })

    // Save the associations
    await model.setRoles(roles)

    // Update the response
    model.set('roles', roles)
  }
}
