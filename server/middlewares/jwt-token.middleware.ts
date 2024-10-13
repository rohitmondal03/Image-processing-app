import { Request, Response, NextFunction } from "express"
import jsonwebtoken from "jsonwebtoken"

export const verifyAuthToken= (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if(!token) {
    res.status(498).json({
      message: "Token not found !!"
    })
    return;
  }  
}