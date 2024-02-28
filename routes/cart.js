const router = require("express").Router();

const cartController = require("../controllers/cart-controller");

router.post("/add-to-cart", cartController.createCart);
router.get("/cart", cartController.getCart);

module.exports = router;
