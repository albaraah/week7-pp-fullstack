const Product = require("../models/productModel");
const mongoose = require("mongoose");

// POST /products
const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create({ ...req.body });
    res.status(201).json(newProduct);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to create book", error: error.message });
  }
};

module.exports = {
    createProduct
};