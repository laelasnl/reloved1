const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    order_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order", 
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    payment_method: {
      type: String,
      enum: ["transfer", "E-wallet"], 
      default: null,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "canceled"], 
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;