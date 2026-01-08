import express from 'express';
import db from './database/db.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
