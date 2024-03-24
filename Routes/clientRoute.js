// clientRoutes.js
const express = require("express");
const { clientModel } = require("../Models/clientModel");

const clientRouter = express.Router();

clientRouter.post("/add", async (req, res) => {
  try {
    const { name, email, phoneNumber, address, paymentMethod } = req.body;
    const newClient = new clientModel({
      name,
      email,
      phoneNumber,
      address,
      paymentMethod
    });
    await newClient.save();
    res.status(201).json({ message: "Client added successfully", client: newClient });
  } catch (error) {
    res.status(500).json({ message: "Failed to add client", error: error.message });
  }
});

module.exports = { clientRouter };
