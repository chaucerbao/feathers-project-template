'use strict'

exports.default = function (options) {
  return async function (hook) {
    const sequelize = hook.app.get('sequelize')
    const { tags: Tag } = sequelize.models
    const tags = hook.data.tags
    const model = hook.result

    if (!tags) {
      return
    }

    const tagsFound = await Tag.findAll({
      where: {
        name: {
          $in: tags
        }
      },
      through: { attributes: [] }
    })

    // Save the associations
    await model.setTags(tagsFound)

    // Update the response
    model.set('tags', tagsFound)
  }
}
