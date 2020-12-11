const { mongoose } = require('../config/db')
const { encryptPassword, createToken, createSalt } = require('../utils/index')

const Schema = mongoose.Schema
const schema = new Schema({
  username: { type: String, required: true }, // 用户名
  nickname: String, // 昵称
  password: String, // 密码
  avatar: String, // 头像
  salt: String, // 盐
  createTime: { type: Date, default: new Date() }, // 创建时间
  modifyTime: { type: Date, default: new Date() }, // 修改时间
  lastLoginT: Date, // 上次登陆时间
  loginIp: String, // 登陆IP
  ban: { type: String, default: 'N' }, // 用户是否封禁
  role: { type: Number, default: 1 } // 0:管理员 1:普通
})

const Auth = mongoose.model('auth', schema, 'auth')
module.exports = {
  Auth,
  Dao: {
    login: async params => {
      try {
        const user = await Auth.findOne({ username: params.username })
        if (!user) throw { message: '用户不存在' }
        if (user.password !== encryptPassword(user.salt, params.password)) throw { message: '密码有误' }
        return { token: createToken({ id: user.id }) }
      } catch (err) {
        throw err
      }
    },
    register: async params => {
      try {
        const { username, password } = params
        if (username.length < 4) throw { message: '用户名长度不少于4位' }
        if (password.length < 6) throw { message: '新密码不少于6位数！' }
        const exists = await Auth.exists({ username })
        if (exists) throw { message: '用户名称已被占用！' }
        const salt = createSalt()
        const user = await Auth.create({ username, salt, password: encryptPassword(salt, password), role: 1 })
        return user
      } catch (err) {
        throw err
      }
    },
    getUser: async userId => {
      try {
        const user = await Auth.findOne({ _id: userId }, { _id: 1, username: 1, avatar: 1, role: 1 })
        return user
      } catch (err) {
        throw err
      }
    }
  }
}

const init = async () => {
  const exists = await Auth.exists({})
  if (!exists) {
    const salt = createSalt()
    await Auth.create({ username: 'admin', salt, password: encryptPassword(salt, '111111'), role: 0 })
  }
}
init()
