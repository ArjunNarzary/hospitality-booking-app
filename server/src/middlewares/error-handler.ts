import { Request, Response, NextFunction } from "express"

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error)
  if (error?.message.includes("prisma_1")) {
    error.message = "Something went wrong"
  }

  error.statusCode = error?.statusCode || 500
  error.details = error?.details || undefined

  res.status(error.statusCode).json({
    success: false,
    message: error.message || "Something went wrong",
    details: error.details,
  })
}
