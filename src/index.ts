import express = require('express');
import {Server} from "./server";

const app: express.Application = Server.bootstrap();

app.get('/', (req:any, res:any) => {
  res.send('Hello World')
});