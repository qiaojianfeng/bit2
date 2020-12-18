const ENV = process.env.NODE_ENV || 'development'
const BASE = {
  port: 3000,
  host: '0.0.0.0',
  mongoUrl: 'mongodb://localhost:27017/bit2',
  secret: 'bit2@@xx#123'
}

const development = Object.assign({}, BASE, {})
const production = Object.assign({}, BASE, {
  // 该部分是生产环境配置
  port: 8081,
  mongoUrl: 'mongodb://bit2_admin:51741@127.0.0.1:27017/bit2'
})
const config = { development, production }

module.exports = config[ENV]

//  cd /www/server/mongodb/bin/
//  ./mongo
// db.createUser({ user: 'root', pwd: '51741', roles: [{ role: 'root', db: 'admin' }] })
// use bit2
// db.createUser({ user: 'bit2_admin', pwd: '51741', roles: [{ role: 'readWrite', db: 'bit2' }] })
