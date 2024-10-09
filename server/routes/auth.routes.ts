import express from "express"
import bcrypt from "bcrypt"

export const authRouter = express.Router();

authRouter.post("/signup", async (req) => {
  const body = req.body;
  const email = body.email;
  const password = body.password;

  const hashedPassword = await bcrypt.hash(password, 2);

  const userData = {
    email,
    password: hashedPassword,
  }

  console.log(userData);
})