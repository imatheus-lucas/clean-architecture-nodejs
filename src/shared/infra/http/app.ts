import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import routes from "./routes";
import HttpError from "../../errors/HttpError";

import express, { Response, Request, NextFunction } from "express";

import "express-async-errors";
import "@shared/infra/typeorm";
import "@shared/container";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof HttpError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }
  return response.status(500).json({
    status: "error",
    message: "Internal server error" + err,
  });
});

export default app;
