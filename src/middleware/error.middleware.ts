// src/middlewares/error.middleware.ts
import type { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export function globalErrorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  // 1. Jika eror disebabkan oleh gagal validasi Zod
  if (err instanceof ZodError) {
    console.error("💥 [VALIDATION ERROR DETECTED]");
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Validation Error Input",
      errors: err.issues.map((e) => ({
        field: e.path.join("."),
        message: e.message,
      })),
    });
    return;
  }

  // 2. Jika eror adalah Error Object standar internal server
  if (err instanceof Error) {
    console.error(`💥 [SYSTEM ERROR DETECTED]: ${err.message}`);
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: err.message,
    });
    return;
  }

  // 3. Jaring pengaman terakhir jika tipe data eror tidak diketahui sama sekali
  console.error("💥 [UNKNOWN ERROR DETECTED]:", err);
  res.status(500).json({
    success: false,
    statusCode: 500,
    message: "An unexpected internal server error occurred",
  });
}