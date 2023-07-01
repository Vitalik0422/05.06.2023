var express = require('express');
var router = express.Router()
const fs = require('fs');
const path = require('path');

const basketCtrl = require('../controler/basket');
const { log } = require('console');

/* GET users listing. */
router.get('/basket', function(req, res, next) {
  res.render('basket');
});

router.post('/getlist', async (req,res) => {
  const result = await basketCtrl.getList();
  console.log(result);
  res.send(result);
})

module.exports = router;
