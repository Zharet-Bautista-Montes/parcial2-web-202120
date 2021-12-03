var express = require('express');
var router = express.Router();
var getProducts = require('../controllers/product');

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
router.get('/', function (req, res, next) {
  const data = getProducts(req.query.queryParam);
  console.log(data);
  res.send(data);
});

module.exports = router;
