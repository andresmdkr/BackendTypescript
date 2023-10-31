
import { model, Schema } from "mongoose";
import IProduct from "../interfaces/product.interface";
import bcrypt from "bcrypt";

const ProductSchema = new Schema<IProduct>(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
    },
    descripcion: {
      type: String,
    },
    precio: {
      type: Number,
      required: [true, "El precio es obligatorio"],
      min: [0, "El precio no puede ser un valor negativo"],
    },
    imagenUrl: {
      type: String,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

export default model<IProduct>("Product", ProductSchema);

