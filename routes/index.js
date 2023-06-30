const express = require('express');
const router = express.Router();
const multer = require('multer')
const upload  =  multer ( {  dest : 'uploads/'  } )
const orderCtrl = require('../controler/order')


router.get('/', (req,res) => {
  res.redirect('/main')
})
router.get('/main', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add', upload.none(), async (req,res) => {

  const result = await orderCtrl.add(req.body)

  const resolve ={ 
    payload: 'ok',
    id: result
  }

  res.json(resolve)
})

module.exports = router;
