const { mongoose } = require('../config/db')
const Schema = mongoose.Schema
const schema = new Schema({
  uid: String, // 创建者ID
  createTime: { type: Date } // 创建时间
})

const Picture = mongoose.model('picture', schema, 'picture')
module.exports = {
  Picture,
  Dao: {
    add: async params => {
      try {
        const picture = await Picture.create(params)
        return picture
      } catch (err) {
        throw err
      }
    }
  }
}
