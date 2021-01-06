var express = require('express');
var router = express.Router();
var product = require('./Products');
router.get('/:id?', function (req, res, next) {
  if (req.params.id) {
    product.getProductById(req.params.id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    product.getAllProducts(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
router.put('/:id', function (req, res, next) {
  product.updateProduct(req.params.id, req.body.product, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.delete('/:id', function (req, res, next) {
  product.deleteProduct(req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
