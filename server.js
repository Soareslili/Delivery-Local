import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/delivery_local";



/* Conexão com Mongo */

mongoose.connect(MONGO_URI)
.then(() => console.log("✅ Conectado ao MongoDB"))
.catch((err) => console.error("Erro na conexão:", err.message))

/* Rota Inicial */

app.get("/", (req, res) => {
    res.json({message: "API Delivery Local rodando 🚀"})
})

// Middleware 404
app.use((req, res) => status(400).json({error: "Rota não encontrada" }))

// Iniciar Servidor

app.listen(PORT, () => console.log(`🚀 Servidor rodando em http://localhost:${PORT}`))