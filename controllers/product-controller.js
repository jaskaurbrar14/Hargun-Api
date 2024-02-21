const knex = require("knex")(require("../knexfile"));

const index = async (_req, res) => {
  try {
    const data = await knex("products");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving products: ${err}`);
  }
};
const getProductById = async (req, res) => {
  const product_id = req.params.product_id;
  try {
    const productsFound = await knex("products")
      .where({
        id: product_id,
      })
      .first();
    if (productsFound.length === 0) {
      return res.status(404).json({
        message: `Product with ID ${product_id} not found`,
      });
    }

    // const productData = productsFound[0];
    res.json(productsFound);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve product data for product with ID ${req.params.product_id}`,
    });
  }
};

module.exports = {
  index,
  getProductById,
};
