import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import cors from 'cors';
import { studentRouter } from './routes/studentRouter.js';
dotenv.config();
(async () => {
  try {
    await mongoose.connect(
      process.env.STR_CONN,

      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    console.log('conected');
  } catch (err) {
    console.log('Erro ao conectar ao DB', err);
  }
})();


const app = express();
// app.use(cors());
app.use(express.json());
app.use(studentRouter);

app.listen(3002, () => {
  console.log('API started...')
});