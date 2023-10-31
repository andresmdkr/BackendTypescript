import express from "express";
import * as ProductController from "../controllers/product.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
  validateAddProduct,
  validateProductId,
  validateEditProduct,
} from "../validators/product.validator";
import { isAdmin } from "../middlewares/product.middleware";

const productRouter = express.Router();

//Obtener todos los productos
productRouter.get("/", ProductController.listProducts);

//Obtener producto por ID
productRouter.get("/:id", validateProductId, ProductController.getProductById);

//Agregar producto
productRouter.post(
  "/",
  authMiddleware,
  isAdmin,
  validateAddProduct,
  ProductController.addProduct
);

//Eliminar producto
productRouter.delete(
  "/:id",
  authMiddleware,
  isAdmin,
  validateProductId,
  ProductController.deleteProduct
);

// Editar producto
productRouter.put(
  "/:id",
  authMiddleware,
  isAdmin,
  validateProductId,
  validateEditProduct,
  ProductController.editProduct
);


export default productRouter;
