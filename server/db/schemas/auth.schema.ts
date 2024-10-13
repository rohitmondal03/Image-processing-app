import { Schema } from "mongoose";

export const userSchema = new Schema({
  id: String,
  name: String,
  email: String,
  password: String,
  created_at: Date,
})