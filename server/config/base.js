const ENV = process.env.NODE_ENV || 'development';
const BASE = {
  port: 3000,
  host: '0.0.0.0',
  mongoUrl: 'mongodb://localhost:27017/fast',
  secret: 'fast@@xx#123',
};

const development = Object.assign({}, BASE, {});
const production = Object.assign({}, BASE, {
  // 该部分是生产环境配置
  port: 8081,
  // mongoUrl: 'mongodb://root:51741@127.0.0.1:27017/wxrobot'
});
const config = { development, production };

module.exports = config[ENV];
