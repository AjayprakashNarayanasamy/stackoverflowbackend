//Room
var express = require ("express");
var app = express.Router();
var productModule = require("../modules/productModule")
app.get("/get",productModule.getProduct)
app.post("/create",productModule.createProduct) 
app.put("/update/:id",productModule.updateProduct)
app.delete("/remove/:id",productModule.deleteProduct)


module.exports = app;