/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("id").primary();
    table.string("product_name").notNullable();
    table.text("photo").notNullable();
    table.string("category").notNullable();
    table.text("description").notNullable();
    table.decimal("price", 10, 2).notNullable();
    table.string("collection").notNullable();
    table.string("trending").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("products");
};
