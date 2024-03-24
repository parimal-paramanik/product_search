// productRoutes.js
const express = require("express");
const { productModel } = require("../Models/productModel");
const { clientModel } = require("../Models/clientModel");

const productRouter = express.Router();

productRouter.post("/add", async (req, res) => {
  try {
    const { product, model, price, image, discount, quantity, deliverCharge, status, clientId } = req.body;
    const newProduct = new productModel({
      product,
      model,
      price,
      image,
      discount,
      quantity,
      deliverCharge,
      status,
      clientId
    });
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Failed to add product", error: error.message });
  }
});

productRouter.get("/singleproduct/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await productModel.findOne({ _id: productId});
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    
    // Retrieve client details using the clientId associated with the product
    const client = await clientModel.findOne({ _id:product.clientId});
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    // Send both product and client details in the response
    res.status(200).json({ product, client });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch product", error: error.message });
  }
});



module.exports = { productRouter };
