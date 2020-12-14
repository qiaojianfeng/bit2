const { verifyToken } = require('../utils/index')
module.exports = function() {
  return async function(ctx, next) {
    const { id } = verifyToken(ctx.header.authorization)
    if (ctx.method == 'GET') {
      ctx.query.uid = id
    } else {
      ctx.request.body.uid = id
    }
    await next()
  }
}
