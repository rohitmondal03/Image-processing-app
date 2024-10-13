import type { NextFunction, Response, Request } from "express";

import { UserModel } from "../db/models";

export const isUserExistingMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  const email = body.email;

  if (!email) {
    res.status(400).json({ 
      message: "Email is required" 
    });
  }

  const isUserExisting = await UserModel.exists({ email })

  if (isUserExisting) {
    res.status(403).json({
      message: "User already exists!"
    });
  }else {
    next();
  }
}