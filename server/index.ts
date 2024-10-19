import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import { config } from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"

import { PORT } from "./config"
import { authRouter } from "./routes/auth.routes"

config();

// HTTP server initialization
const server = express();

// Middlewares
server.use(bodyParser.json());
server.use(express.json({}));
server.use(cookieParser())
server.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

server.use("/dashboard", authRouter)
server.use("/auth", authRouter)

// listen on specified PORT number
server.listen(PORT)

// DB connection
mongoose.connect(process.env.MONGODB_URL ?? "", {
  dbName: "image-processing-app",
  retryWrites: true,
})
  .then(() => console.log("DB connected successfully !!"))
  .catch((err) => console.log("Error connecting DB", err)) 
