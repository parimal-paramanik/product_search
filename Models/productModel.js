const mongoose = require("mongoose");

const modelSchema = mongoose.Schema({
  product: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  discount: { type: Number, required: true },
  quantity: { type: Number, required: true },
  deliverCharge: { type: Number, required: true },
  status: {
    type: String,
    enum: ["payment-waiting", "payment-done"],
    default: "payment-waiting"
  },
  createdAt: {
    type: Date,
    default: Date.now
},
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' } 
});

const productModel = mongoose.model("Product", modelSchema);

module.exports = { productModel };
