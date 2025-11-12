import Product from "../models/Product.js";


export const getAllProducts = async (req, res) => {
  try {
    const { category, search } = req.query;

  
    let filter = {};

    if (category) {
      filter.category = category;
    }

    if (search) {
      filter.name = { $regex: search, $options: "i" }; 
    }

    const produtos = await Product.find(filter);
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
};


export const createProduct = async (req, res) => {
  try {
    const novoProduto = await Product.create(req.body);
    res.status(201).json(novoProduto);
  } catch (err) {
    res.status(400).json({ error: "Erro ao criar produto" });
  }
};


export const updateProduct = async (req, res) => {
  try {
    const produtoAtualizado = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!produtoAtualizado) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    res.json(produtoAtualizado);
  } catch (err) {
    res.status(400).json({ error: "Erro ao atualizar produto" });
  }
};


export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ message: "Produto deletado com sucesso" });
  } catch (err) {
    res.status(400).json({ error: "Erro ao deletar produto" });
  }
};
