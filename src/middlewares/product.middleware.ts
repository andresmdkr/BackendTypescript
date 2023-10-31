import { NextFunction, Request, Response } from "express";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.rol === "admin") {
    next();
  } else {
    res.status(403).json({
      error: "Acceso no autorizado. Se requiere rol de administrador.",
    });
  }
};
