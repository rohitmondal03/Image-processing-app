import express from "express"
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"

import { UserModel } from "../db/models";
import { signInMiddleware, signUpMiddleware } from "../middlewares/auth.middleware";

export const authRouter = express.Router();

// sign-up route
authRouter.post("/signup", signUpMiddleware, async (req, res, next) => {
  const body = req.body;
  const email = body.email;
  const password = body.password;
  const name = body.name;

  const hashedPassword = await bcrypt.hash(password, 2);

  const userData = {
    user_id: uuid(),
    name,
    email,
    password: hashedPassword,
    created_at: new Date(),
  }

  try {
    await UserModel.create(userData)
    res.json(userData)
  } catch (err) {
    next(err)
  }
})  

// sign-in route
authRouter.post("/signin", signInMiddleware, async (req, res, next) => {
  const body = req.body;
  const email = body.email;
  const password = body.password;

  const userData = await UserModel.findOne({ email })
  const isPasswordCorrect = await bcrypt.compare(password, userData?.password ?? "")

  if (!isPasswordCorrect) {
    res.status(401).json({
      message: "Password entered is incorrect !!"
    })
  } else {
    next();
  }
})