import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router().use(authMiddleware);

//Obtener todos los usuarios
router.get("/", userController.index);
//Crear usuario
router.post("/", userController.create);
//Obtener usuario por ID
router.get("/:id", userController.show);
//Eliminar usuario por ID
router.delete("/:id", userController.destroy);


export default router;
