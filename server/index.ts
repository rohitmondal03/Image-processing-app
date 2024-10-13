import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import { config } from "dotenv"
import mongoose from "mongoose"
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"

import { PORT } from "./config"
import { authRouter } from "./routes/auth.routes"
import { UserModel } from "./db/models"
import { isUserExistingMiddleware } from "./middlewares/auth.middleware"

config();

// HTTP server initialization
const server = express();

// Middlewares
server.use(bodyParser.json());
server.use(cors());
server.use(express.json({}));

server.use("/dashboard", authRouter)
server.use("/auth", isUserExistingMiddleware, authRouter)

// listen on specified PORT number
server.listen(PORT)

// DB connection
mongoose.connect(process.env.MONGODB_URL ?? "", {
  dbName: "image-processing-app",
  retryWrites: true,
})
  .then(() => console.log("DB connected successfully !!"))
  .catch((err) => console.log("Error connecting DB", err)) 
