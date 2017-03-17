'use strict'

exports.default = function (options) {
  return async function (hook) {
    const sequelize = hook.app.get('sequelize')
    const { roles: Role } = sequelize.models
    const roles = hook.data.roles
    const model = hook.result

    if (!roles) {
      return
    }

    const rolesFound = await Role.findAll({
      where: {
        name: {
          $in: roles
        }
      },
      through: { attributes: [] }
    })

    // Save the associations
    await model.setRoles(rolesFound)

    // Update the response
    model.set('roles', rolesFound)
  }
}
