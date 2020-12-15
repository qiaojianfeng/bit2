const multer = require('@koa/multer')
const path = require('path')
const fs = require('fs')

// 上传文件存放路径、及文件命名
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const filePath = path.join(__dirname, '../../public/uploads')
    if (!fs.existsSync(filePath)) fs.mkdirSync(filePath)
    cb(null, filePath)
  },
  filename: function(req, file, cb) {
    const type = file.originalname.split('.')[1]
    cb(null, `BIT2-${Date.now().toString(16)}.${type}`)
  }
})
const fileFilter = (req, file, cb) => {
  try {
    const type = file.originalname.split('.')[1].toUpperCase()
    const fileTypes = ['JPEG', 'JPG', 'TIFF', 'PNG', 'GIF', 'SVG', 'PDF', 'BMP', 'WEBP']
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
  fileSize: 10 * 1024 * 1024, //文件大小 单位 b
  files: 9 //文件数量
}
const upload = multer({ storage, fileFilter, limits })

module.exports = upload
