const { Router } = require("express");
const multer = require("multer");

const { upload } = require("../libs/storage.js");

const router = Router();

router.post("/upload", function (req, res) {
  upload(req, res, function (err) {
    console.log(req.files);
    if (err instanceof multer.MulterError) {
      res.send(err.code);
    } else if (err) {
      res.send(err.message);
    } else {
      const fileNames = req.files.map((photo) => photo.filename);
      res.send(fileNames);
    }
  });
});

module.exports = router;
