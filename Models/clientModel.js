const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  paymentMethod: { type: String, required: true }
});

const clientModel = mongoose.model("Client", clientSchema);

module.exports = { clientModel };
