const mongoose = require("mongoose");

const ratingSchema = mongoose.Schema({ rate: String, Count: Number });

const adminCartSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    category: String,
    price: Number,
    description: String,
    image: String,
    rating: ratingSchema,
  },
  { versionKey: false }
);

const adminCartModel = mongoose.model("AdminCart", adminCartSchema);
