var db = require('./dbconnecttion');

var Products = {
  getAllProducts: function (callback) {
    return db.query('SELECT * FROM products', callback);
  },
  getProductById: function (id, callback) {
    return db.query('SELECT * FROM products WHERE id = ?', [id], callback);
  },
  updateProduct: function (id, product, callback) {
    return db.query(
      'UPDATE products SET ? WHERE id = ?',
      [product, id],
      callback
    );
  },
  deleteProduct: function (id, callback) {
    return db.query('DELETE FROM products WHERE id = ?', [id]);
  },
};
module.exports = Products;
