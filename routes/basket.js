var express = require('express');
var router = express.Router()

const basketCtrl = require('../controler/basket')

/* GET users listing. */
router.get('/basket', function(req, res, next) {
  res.render('basket');
});

router.post('/getlist', async (req,res) => {
  const result = await basketCtrl.getList();
  res.json(result)
})

module.exports = router;
