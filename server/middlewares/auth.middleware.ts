import type { NextFunction, Response, Request } from "express";

import { UserModel } from "../db/models";

export const signUpMiddleware = async (req: Request, res: Response, next: NextFunction) => {
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
  } else {
    next();
  }
}

export const signInMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  const email = body.email;

  const user = await UserModel.exists({ email })

  if (!user) {
    res.status(401).json({
      message: "User not found !!"
    })
  } else {
    next();
  }
}