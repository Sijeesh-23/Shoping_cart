var express = require('express');
var router = express.Router();
var productHelper = require('../helpers/product-helper')

/* GET home page. */
router.get('/', function(req, res) {
  
   productHelper.getAllProducts().then((product) => {
      res.render('user/view-products', { title:"shoping cart",product,admin:false });
    })

  
});

module.exports = router;
