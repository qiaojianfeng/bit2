const { verifyToken } = require('../utils/index');
module.exports = function () {
  return async function (ctx, next) {
    const { userid } = verifyToken(ctx.header.authorization);
    if (ctx.method == 'GET') {
      ctx.query.uid = userid;
    } else {
      ctx.request.body.uid = userid;
    }
    await next();
  };
};
