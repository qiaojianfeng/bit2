const Koa = require('koa')
// const path = require('path')
const consola = require('consola')
const koaJwt = require('koa-jwt')
const bodyParser = require('koa-bodyparser')
// const static = require('koa-static')
// const historyFallback = require('koa2-history-api-fallback')
const { secret, host, port } = require('./config/base')
const { init: loggerInit } = require('./utils/logger')
const { resFormat } = require('./middleware/resformat')
const appCatch = require('./middleware/catch')
const api = require('./routes/api-index')
const cors = require('koa2-cors')
// const router = require('./routes/index')
// const mime = require('mime-types')
const app = new Koa()
const DB = require('./config/db')
const jwtUnless = [/^\/api\/auth\/login/, /^\/api\/auth\/logout/, /^((?!\/api\/).)*$/]
app.use(appCatch)
app.use(
  cors({
    origin: ctx => '*',
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
  })
)
app.use(bodyParser({ extendTypes: ['json', 'text', 'form'] }))
/**
 * 授权异常校验，捕获
 */
app.use(koaJwt({ secret }).unless({ path: jwtUnless }))
/**
 * 连接数据库
 */
DB.connect()
/**
 * 注册API
 */
app.use(resFormat('^/api/'))
app.use(api.routes())
app.use(api.allowedMethods())

/**
 * 注册路由
 */
// app.use(router.routes())
// app.use(router.allowedMethods())

// app.use(historyFallback())
// app.use(static(path.resolve('dist')))

loggerInit()
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

/**
 * 启动程序
 */
app.listen(port, host)
consola.ready({
  message: `Server listening on http://${host}:${port}`,
  badge: true
})
