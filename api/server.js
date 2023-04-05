import express from "express";
import routes from "./routes.js";
import db from "./src/db.js";
import { body, validationResult } from 'express-validator'
import cors from 'cors'

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.post('causas', [
  body('nome').isLength({min: 3})
], (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
  }
})


db.sync(/*{ force: true }*/)
  .then(() => {
    console.log('Banco de dados criado com sucesso!');
  })
  .catch((error) => {
    console.log('Erro ao criar o banco de dados:', error);
  });

app.listen(3300, () => console.log("Servidor iniciado na porta 3300"));