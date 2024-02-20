const router = require("express").Router();

const productController = require("../controllers/product-controller");

router.get("/products", productController.index);
router.get("/products/:product_id", productController.getProductById);

module.exports = router;
