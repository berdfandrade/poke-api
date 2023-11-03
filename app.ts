import express from 'express';
import {Request, Response } from 'express'
import dbConnect from './config/dbConfig';
import router from './src/routes/pokeRoutes';

const app = express();
const port = process.env.PORT || 3001;

dbConnect()

app.use(router)

app.get('/', (req : Request, res : Response) => {
  res.send({messagem : 'Hello, World!'});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
