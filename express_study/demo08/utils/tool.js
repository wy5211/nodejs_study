
const multer = require('multer')
const path = require('path');
const sd = require('silly-datetime');
const mkdirp = require('mkdirp');

const tool = {
  multer: () => {
    const storage = multer.diskStorage({
      destination: async (req, file, cb) => {
        const dateFileName = sd.format(Date.now(), 'YYYYMMDD')

        const uploadPath = path.join('static/upload', dateFileName)

        await mkdirp(uploadPath)

        cb(null, uploadPath)
      },
      filename: (req, file, cb) => {
        const {originalname,fieldname } = file
        const extname = path.extname(originalname)
        cb(null, `${fieldname}-${Date.now()}${extname}`)
      }  
    })
    const upload = multer({ storage: storage })
    return upload;
  }
} 

module.exports = tool