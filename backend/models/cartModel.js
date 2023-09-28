const mongoose = require("mongoose");

const ratingSchema = mongoose.Schema({ rate: String, Count: Number });

const cartSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    category: String,
    price: Number,
    description: String,
    image: String,
    rating: ratingSchema,
    userId: String,
  },
  { versionKey: false }
);

const cartModel = mongoose.model("cart", cartSchema);

module.exports = { cartModel };
