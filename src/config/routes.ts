import { Application } from "express";
import userRoutes from "../routes/user.routes";
import authRoutes from "../routes/auth.routes";
import productRouter from "../routes/product.routes";

export const register = async (app: Application) => {
  app.use("/users", userRoutes);
  app.use("/auth", authRoutes);
  app.use("/products", productRouter);
  console.log("🟢 Routes registered");
};
