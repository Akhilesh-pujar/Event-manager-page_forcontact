import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";
import userRouter from "./router/user.js";

const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST","GET"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", messageRouter);
app.use("/api/v1/signup", userRouter);
app.use("/api/v1/signin", userRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/subscribe", userRouter);

dbConnection();

export default app;
