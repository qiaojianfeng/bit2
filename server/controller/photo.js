const photoDB = require('../models/photo')
const upload = require('../middleware/upload')

module.exports = {
  uploadPhoto: async (ctx, next) => {
    try {
      const uid = ctx.request.body.uid
      await upload
        .array('files', 9)(ctx, next)
        .catch(err => console.log(err))
      const result = await photoDB.Dao.add({ files: ctx.files, uid })
      ctx.body = result
    } catch (err) {
      throw err
    }
  },
  getMyPhoto: async ctx => {
    try {
      const uid = ctx.request.query.uid
      const params = { ...ctx.request.body, condition: { author: uid } }
      const result = await photoDB.Dao.list(params)
      ctx.body = result
    } catch (err) {
      throw err
    }
  },
  getMyLike: async ctx => {
    try {
      const uid = ctx.request.query.uid
      const params = { ...ctx.request.body, condition: { like: { $in: uid } } }
      const result = await photoDB.Dao.list(params)
      ctx.body = result
    } catch (err) {
      throw err
    }
  },
  getDiscoverPhoto: async ctx => {
    try {
      const params = { ...ctx.request.body, condition: {} }
      const result = await photoDB.Dao.listAndAuthor(params)
      ctx.body = result
    } catch (err) {
      throw err
    }
  },
  getPhoto: async ctx => {
    try {
      const result = await photoDB.Dao.get(ctx.query._id)
      ctx.body = result
    } catch (err) {
      throw err
    }
  },
  addLike: async ctx => {
    try {
      const uid = ctx.request.body.uid
      const _id = ctx.request.body._id
      const result = await photoDB.Dao.update(_id, { $addToSet: { like: uid } })
      ctx.body = result
    } catch (err) {
      throw err
    }
  },
  delLike: async ctx => {
    try {
      const uid = ctx.request.body.uid
      const _id = ctx.request.body._id
      const result = await photoDB.Dao.update(_id, { $pull: { like: uid } })
      ctx.body = result
    } catch (err) {
      throw err
    }
  }
}
