import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import { config } from "dotenv"
import bcrypt from "bcrypt"

// import { authRouter } from "./routes/auth.routes"
import { PORT } from "./config"
import { authRouter } from "./routes/auth.routes"

config();

// HTTP server initialization
const server = express();

// Middlewares
server.use(bodyParser.json());
server.use(cors());
server.use(express.json({}));
server.use("/dashboard", authRouter)
server.use("/auth", authRouter)

// listen on specified PORT number
server.listen(PORT)