# Project Title

Hargun-Api(server for Hargun)

## Table of Contents

- [Overview](#Overview)
- [Installation](#Installation)
- [Folder Structure](#Folder-Structure)
- [Api Endpoints](#Api-Endpoints)

## Overview

- This is a simple Express server setup with Knex.js to interact with a MySQL database. It's intended to be used as the backend for Hargun React application.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jaskaurbrar14/Hargun-Api
   ```

2. Navigate to the project directory:

   ```bash
   cd Hargun-Api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a .env file and create the environment variables same as mentioned in the .env.sample file

5. To start the server, run:

```bash
npm start
```

6. Ensure you have MySQL installed and running. Update the variables in .env.sample file according to your MySQL database credentials.

   - Create a new database to link with the server
   - run the migrations provided in the folder to create tables

   ```bash
     npm run migrate
   ```

   - run the seeds provided in the folder to fill the tables with seed data

   ```bash
    npm run seed
   ```

## Folder Structure

- Hargun-Api/
- README.md
- node_modules/
- package.json
- server.js
- knexfile.js
- migrations/
  - 20240220214926_create_products_table
- seeds/
  - products.js
- routes/
  - products.js
- controllers/
  - product-Controller.js
- public/
  - Image folders for all the products
- .env.sample
- package.json
- package-lock.json

- Folder structure Explaination
  - server.js: Entry point of the Express application.
  - knexfile.js: Knex configuration file.
  - db: Contains database related files.
  - migrations: Knex migration files for database schema.
  - seeds: Knex seed files for initial data.
  - routes: Contains route definitions.
  - controllers: Controllers for handling business logic.

## API Endpoints

- GET /products: Retrieve all products.
- GET /products/trending: Retrieve all trending products.
- GET /products/:id: Retrieve a product by ID.
