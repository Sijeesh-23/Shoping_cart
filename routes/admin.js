var express = require('express');
//const { render } = require('../app');
var router = express.Router();
var productHelper = require('../helpers/product-helper')

/* GET users listing. */
router.get('/', function (req, res, next) {

  productHelper.getAllProducts().then((product) => {
    res.render('admin/view-products', { title: "admin", product, admin: true })
  })

  
});

router.get('/add-product', function (req, res) {
  res.render('admin/add-product',{ admin: true})
})


router.post('/add-product', (req, res) => {
  let imageFile = req.files.image;
  let productData = req.body;

  productHelper.addProduct(productData, (id) => {
    // Save image file to public/product-images/ with filename as the inserted MongoDB id
    imageFile.mv('./public/product-images/' + id + '.jpg', (err) => {
      if (!err) {
        res.render('admin/add-product');
      } else {
        console.log("Image upload error:", err);
      }
    });
  });
});


module.exports = router;