import express from "express"
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"

import { UserModel } from "../db/models";

export const authRouter = express.Router();

// signup route
authRouter.post("/signup", async (req, res, next) => {
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