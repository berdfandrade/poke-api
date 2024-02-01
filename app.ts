import express from 'express';
import {Request, Response } from 'express'
import dbConnect from './src/config/dbConfig'
import routes from './src/routes';

const app = express();
const port = process.env.PORT || 5001;

dbConnect()

routes(app)

app.get('/', (req : Request, res : Response) => {
  res.send({messagem : 'Hello, World!'});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
