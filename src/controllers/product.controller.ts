
import { Request, Response } from "express";
import ProductModel from "../models/product.model";

// Controlador para listar todos los productos
export const listProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al listar los productos" });
  }
};

// Controlador para obtener un producto por su ID
export const getProductById = async (req: Request, res: Response) => {
  const productId = req.params.id;
  try {
    const product = await ProductModel.findById(productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "Producto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto" });
  }
};

// Controlador para agregar un nuevo producto
export const addProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = new ProductModel(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ error: "Error al agregar el producto" });
  }
};

// Controlador para eliminar un producto por su ID
export const deleteProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(productId);
    if (deletedProduct) {
      res.json({ message: "Producto eliminado correctamente" });
    } else {
      res.status(404).json({ error: "Producto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
};
