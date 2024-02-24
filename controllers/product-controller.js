const knex = require("knex")(require("../knexfile"));

const index = async (_req, res) => {
  try {
    const data = await knex("products");
    allProducts = data.map((product) => {
      return {
        id: product.id,
        title: product.product_name,
        price: product.price,
        photo: JSON.parse(product.photo),
      };
    });
    res.status(200).json(allProducts);
  } catch (err) {
    res.status(400).send(`Error retrieving products: ${err}`);
  }
};
const trending = async (_req, res) => {
  try {
    const productData = await knex("products");
    const filteredData = productData.filter(
      (data) => JSON.parse(data.trending) === 1
    );

    trendingProducts = filteredData.map((product) => {
      return {
        id: product.id,
        title: product.product_name,
        price: product.price,
        photo: JSON.parse(product.photo),
      };
    });
    res.status(200).json(trendingProducts);
  } catch (err) {
    res.status(400).send(`Error retrieving trending products: ${err}`);
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
    res.json(productsFound);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve product data for product with ID ${req.params.product_id}`,
    });
  }
};

module.exports = {
  index,
  trending,
  getProductById,
};
