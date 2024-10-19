import { config } from "dotenv";
import jwt from "jsonwebtoken"

config();

const JWT_SECRET = process.env.JWT_SECRET ?? ""

export const generateJWTToken = (payload: JWTPayload) => {
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
}