import dotenv = require("dotenv");
import express = require("express");
import {Server} from "./server";

dotenv.config();
const port: number = Number(process.env.PORT) || 3000;
const app: express.Application = Server.bootstrap(port);

app.get("/", (req: any, res: any) => {
  res.send("Hello World");
});
