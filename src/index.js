import dotenv from 'dotenv'

dotenv.config();

import express from 'express';
import mongoose from 'mongoose';

import db from './db/db';

const app = express();
const port = process.env.port || '8080';

mongoose.connect(db, { useCreateIndex: true, useNewUrlParser: true})
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

app.listen(port, () => console.log(`Listening on port ${port}`));
