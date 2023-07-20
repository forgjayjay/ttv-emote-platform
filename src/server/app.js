const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/uploads/');
  },
  filename: function (req, file, cb) {
    const customName = req.body['image-name']; 
    const ext = path.extname(file.originalname);
    const filename = customName ? `${customName}${ext}` : `${Date.now()}${ext}`;
    cb(null, filename);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024
  },
});

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image received.' });
  }
  res.json({ imageUrl: `src/uploads/${req.file.filename}` });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
