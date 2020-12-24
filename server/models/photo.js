const { mongoose } = require('../config/db')
const Schema = mongoose.Schema
const schema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'auth', required: [true, '请填发布人ID'] }, // 创建者ID
  createTime: { type: Date }, // 创建时间
  modifyTime: { type: Date }, // 创建时间
  like: { type: Array, default: [] }, // 喜欢
  url: String, // 图片地址
  filename: String,
  group: { type: String, default: '未命名' }, // 组
  title: String, // 标题
  discription: String, // 描述
  tags: { type: Array, default: [] }, // 标签
  size: Number,
  mimetype: String,
  isBan: { type: String, default: 'N' } // 是否被封禁
})

const Photo = mongoose.model('photo', schema, 'photo')
module.exports = {
  Photo,
  Dao: {
    add: async params => {
      try {
        const arr = params.files.map(v => {
          return {
            author: params.uid,
            url: '/uploads/' + v.filename,
            filename: v.filename,
            title: v.filename,
            size: v.size,
            mimetype: v.mimetype,
            createTime: new Date()
          }
        })
        const photo = await Photo.create(arr)
        return photo
      } catch (error) {
        console.log(error)
        throw error
      }
    },
    get: async _id => {
      try {
        const result = await Photo.findOne({ _id })
        return result
      } catch (error) {
        throw error
      }
    },
    list: async params => {
      try {
        const page = Number(params.page || 1)
        const limit = Number(params.pageSize || 10)
        const start = (page - 1) * limit
        const condition = params.condition || {}
        const sortF = { skip: start, limit: limit, sort: { createTime: -1 } }
        const total = await Photo.countDocuments(condition)
        const list = await Photo.find(condition, {}, sortF)
        return { total, list }
      } catch (err) {
        console.log(err)
        throw err
      }
    },
    listAndAuthor: async params => {
      try {
        const page = Number(params.page || 1)
        const limit = Number(params.pageSize || 10)
        const start = (page - 1) * limit
        const condition = params.condition || {}
        const sortF = { skip: start, limit: limit, sort: { createTime: -1 } }
        const total = await Photo.countDocuments(condition)
        const authFields = ['nickname', 'avatar']
        const list = await Photo.find(condition, {}, sortF).populate('author', authFields)
        return { total, list }
      } catch (err) {
        console.log(err)
        throw err
      }
    },
    update: async (_id, params) => {
      try {
        const result = await Photo.updateOne({ _id }, { ...params, modifyTime: new Date() })
        return result
      } catch (err) {
        throw err
      }
    },
    delete: async _id => {
      try {
        const result = await Photo.deleteMany({ _id })
        return result
      } catch (err) {
        throw err
      }
    }
  }
}
