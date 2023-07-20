const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const cors = require('cors'); 

const app = express();

app.use(express.json());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());

var emoteName;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/uploads/');
    console.log(`request image-name 1`, req.body['image-name'])
  },
  filename: function (req, file, cb) {
    console.log(req.body);
    const customName = req.body['image-name'];
    console.log(`custom name ${customName}`);
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

// Middleware to extract image-name from query or body and set it in req.body['image-name']
app.use('/upload', (req, res, next) => {
  const imageName = req.query['image-name'] || req.body['image-name'];
  req.body['image-name'] = imageName;
  console.log(`request image-name 2`, req.body['image-name']);
  next();
});

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image received.' });
  }
  console.log(`request image-name 4`, req.body['image-name'])

  res.json({ imageUrl: `src/uploads/${req.file.filename}` });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
