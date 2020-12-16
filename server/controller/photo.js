const photoDB = require('../models/photo')
const upload = require('../middleware/upload')

module.exports = {
  uploadPhoto: async (ctx, next) => {
    try {
      await upload
        .array('files', 9)(ctx, next)
        .catch(err => console.log(err))
      const result = await photoDB.Dao.add({ files: ctx.files, uid: ctx.request.body.uid })
      ctx.body = result
    } catch (err) {
      throw err
    }
  },
  getMyPhoto: async ctx => {
    try {
      const params = { ...ctx.request.body }
      const result = await photoDB.Dao.list(params)
      ctx.body = result
    } catch (err) {
      throw err
    }
  },
  getDiscoverPhoto: async ctx => {
    try {
      const params = { ...ctx.request.body }
      const result = await photoDB.Dao.list(params)
      ctx.body = result
    } catch (err) {
      throw err
    }
  },
  getPhoto: async ctx => {
    try {
      const result = await photoDB.Dao.get(ctx.query.id)
      ctx.body = result
    } catch (err) {
      throw err
    }
  }
}
