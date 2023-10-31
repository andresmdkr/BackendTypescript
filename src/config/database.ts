require("dotenv").config()
import mongoose from "mongoose";

const DB_URI = `${process.env.DB_URI}`;

export const configure = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("🟢 Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
