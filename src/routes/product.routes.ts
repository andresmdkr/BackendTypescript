import express from "express";
import * as ProductController from "../controllers/product.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
  validateAddProduct,
  validateProductId,
} from "../validators/product.validator";
import { isAdmin } from "../middlewares/product.middleware";

const productRouter = express.Router();

//List Products
productRouter.get("/", ProductController.listProducts);

//Get product by ID
productRouter.get("/:id", validateProductId, ProductController.getProductById);

//Upload product
productRouter.post(
  "/",
  authMiddleware,
  isAdmin,
  validateAddProduct,
  ProductController.addProduct
);

//Delete product by ID
productRouter.delete(
  "/:id",
  authMiddleware,
  isAdmin,
  validateProductId,
  ProductController.deleteProduct
);

export default productRouter;
