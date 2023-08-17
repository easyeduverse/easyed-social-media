const multer = require("multer");
const multerS3 = require("multer-s3");
const dotenv = require("dotenv");
dotenv.config();
const s3 = require("../aws/config");
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET_NAME,
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    contentDisposition: "inline",
    metadata: function (req, file, cb) {
      cb(null, { file: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, `post/${Date.now().toString()} ${file.originalname}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    let ext = file.mimetype;
    if (ext === "application/pdf") {
      cb(new Error("File not supported"), false);
      return;
    }
    cb(null, true);
  },
});
module.exports = upload;
