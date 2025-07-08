const express = require('express');
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, process.env.UPLOAD_FOLDER),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });

router.post('/upload', upload.single('proof'), (req, res) => {
  res.json({ message: 'Proof uploaded successfully', file: req.file.filename });
});

module.exports = router;
