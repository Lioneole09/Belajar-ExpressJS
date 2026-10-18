// src/middlewares/validate.middleware.ts
import type { Request, Response, NextFunction } from "express";
import type { ZodObject } from "zod";

export const validate = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // Validasi input req.body, req.query, atau req.params secara massal
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params
      });
      
      // Jika aman, lanjut ke handler utama
      next();
    } catch (error) {
      // Jika gagal, potong jalur (early cut-off) dan oper ke Global Error Handler via next(error)
      next(error);
    }
  };
};