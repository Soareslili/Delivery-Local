import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    image: { type: String, required: true }, 
    category: {
      type: String,
      required: true,
      enum: ["Pizzas", "Lanches", "Bebidas", "Sobremesas", "Porções", "Esfihas", "Drinks"], 
    },
    quantity: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
