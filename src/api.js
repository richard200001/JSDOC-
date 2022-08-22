const express = require("express");
const app = express();

/**
 * @module api
 */

/**
 * Index Route
 * @name index
 * @path {GET} /
 */

app.get("/", (req, res) => res.send('welcome'));

/**
 * Users Route
 * @name users
 * @path {POST} /users
 */

app.post("/users", (req, res) => res.send('welcome'));

/**
 * Product Route
 * @name products
 * @path {DELETE} /products
 */

app.delete("/products", (req, res) =>  res.send('welcome'));

/**
 * Signin Route
 * @name signin
 * @path {PUT} /signin
 */

app.put("/signin", (req, res) => res.send('welcome'));

app.listen(3000);
console.log("Server on port", 3000);