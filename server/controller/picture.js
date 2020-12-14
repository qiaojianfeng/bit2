const pictureDB = require('../models/picture')

module.exports = {
  add: async ctx => {
    try {
      const result = await pictureDB.Dao.add(ctx.request.body)
      ctx.body = result
    } catch (err) {
      throw err
    }
  }
}
