const multer = require('@koa/multer')
const path = require('path')
const fs = require('fs')
const { fileTypes, maxSize, fileLength, folder, filenamePrefix } = require('../config/base').upload

// 上传文件存放路径、及文件命名
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const filePath = path.join(__dirname, '../../' + folder)
    if (!fs.existsSync(filePath)) fs.mkdirSync(filePath)
    cb(null, filePath)
  },
  filename: function(req, file, cb) {
    const type = file.originalname.split('.')[1]
    cb(null, `${filenamePrefix}${Date.now().toString(16)}.${type}`)
  }
})
const fileFilter = (req, file, cb) => {
  try {
    const type = file.originalname.split('.')[1].toUpperCase()
    const isIncludes = fileTypes.includes(type)
    cb(null, isIncludes)
    if (!isIncludes) {
      throw new Error('文件仅支持以下类型：' + fileTypes)
    }
  } catch (error) {
    cb(new Error(error))
  }
}
// 文件上传限制
const limits = {
  fields: 10, //非文件字段的数量
  fileSize: maxSize,
  files: fileLength
}
const uploader = multer({ storage, fileFilter, limits })

module.exports = uploader
