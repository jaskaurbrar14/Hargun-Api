const knex = require("knex")(require("../knexfile"));

const createCart = async (req, res) => {
  try {
    const { product_id, product_quantity } = req.body;

    // Check if the product exists in the cart
    const existingProduct = await knex("products")
      .where({ id: product_id })
      .first();

    // If the product already has a quantity, return 409 Conflict
    if (existingProduct && existingProduct.quantity !== 0) {
      return res
        .status(409)
        .json({ error: "The product is already added in cart" });
    }

    // If the product doesn't exist in the cart or if it exists but has a 0 quantity, update the quantity
    await knex("products")
      .where({ id: product_id })
      .update({ quantity: product_quantity });

    // Fetch the updated product
    const updatedProduct = await knex("products")
      .where({ id: product_id })
      .first();

    res.status(201).json(updatedProduct);
  } catch (err) {
    console.error("Error adding item to cart:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getCart = async (_req, res) => {};

module.exports = {
  createCart,
  getCart,
};
