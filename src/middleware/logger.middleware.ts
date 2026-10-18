// src/middlewares/logger.middleware.ts
import type { Request, Response, NextFunction } from "express";

export function reqLogger(req: Request, res: Response, next: NextFunction): void {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  
  console.log(`[${timestamp}] 🚀 ${method} request hit on path: ${url}`);
  
  // 🔥 WAJIB: Oper bola ke middleware selanjutnya atau ke Route Handler tujuan
  next();
}