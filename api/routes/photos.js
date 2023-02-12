const { Router } = require("express");
const multer = require("multer");

const { upload } = require("../libs/storage.js");

const router = Router();

router.post("/upload", function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      res.send(err.code);
    } else if (err) {
      res.send(err.message);
    } else {
      res.send(req.files);
    }
  });
});

module.exports = router;
