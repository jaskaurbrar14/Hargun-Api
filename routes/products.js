const router = require("express").Router();

const productController = require("../controllers/product-controller");

router.get("/", productController.index);
router.get("/:product_id", productController.getProductById);

module.exports = router;
