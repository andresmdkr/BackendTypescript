import { Request, Response, NextFunction } from "express";
import { body, param, validationResult } from "express-validator";

// Validadores para agregar productos
export const validateAddProduct = [
  body("nombre")
    .isString()
    .isLength({ min: 3, max: 20 })
    .custom((value: string) => /^[a-z\s]+$/.test(value))
    .withMessage("El nombre debe tener entre 3 y 20 caracteres en minúsculas."),
  body("descripcion")
    .isString()
    .isLength({ min: 10 })
    .withMessage("La descripción debe tener al menos 10 caracteres."),
  body("precio")
    .isNumeric()
    .custom((value: number) => value >= 0)
    .withMessage("El precio no puede ser negativo."),
  body("imagenUrl")
    .isURL()
    .withMessage("La imagenUrl debe ser una URL válida."),
  (req: Request, res: Response, next: NextFunction) => { 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Validador para obtener y eliminar productos por ID 
export const validateProductId = [
  param("id")
    .isMongoId()
    .withMessage("ID no válido"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Validadores para editar productos
export const validateEditProduct = [
  body("nombre").optional().isString().isLength({ min: 3, max: 20 }).custom((value: string) => /^[a-z\s]+$/.test(value)).withMessage("El nombre debe tener entre 3 y 20 caracteres en minúsculas."),
  body("descripcion").optional().isString().isLength({ min: 10 }).withMessage("La descripción debe tener al menos 10 caracteres."),
  body("precio").optional().isNumeric().custom((value: number) => value >= 0).withMessage("El precio no puede ser negativo."),
  body("imagenUrl").optional().isURL().withMessage("La imagenUrl debe ser una URL válida."),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
