const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const multer = require('multer')
const storage = multer.diskStorage({
  destination:  (req, file, cb) => {
    cb(null, 'public/file');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now()+ '.jpeg');
  }
});
const upload = multer({ storage: storage });
//--------------------------controler
const orderCtrl = require('../controler/order')


router.get('/', (req, res) => {
  res.redirect('/main')
})
router.get('/main', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/main/add', upload.single('photo-url'), async (req, res) => {
  req.body.photoUrl = '/file/' + req.file.filename;
  const result = orderCtrl.add(req.body)

  const resolve ={ 
    payload: 'ok',
    id: result
  }

  res.json(resolve)
})

module.exports = router;
