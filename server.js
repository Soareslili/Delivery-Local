import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./routes/ProductRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;

// Conexão MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ Conectado ao MongoDB"))
  .catch((err) => console.error("Erro na conexão:", err.message));

// Rota principal
app.get("/", (req, res) => {
  res.json({ message: "API Delivery rodando 🚀" });
});

// Rotas
app.use("/api/products", productRoutes);

// 404
app.use((req, res) => {
  return res.status(404).json({ error: "Rota não encontrada" });
});

// Exportar para Vercel
export default app;
