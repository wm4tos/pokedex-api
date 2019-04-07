import dotenv from 'dotenv';

import express from 'express';
import mongoose from 'mongoose';

import db from './db/db';

dotenv.config();

const app = express();
const port = process.env.port || '8080';

mongoose.connect(db, { useCreateIndex: true, useNewUrlParser: true })
  .then(() => process.stdout.write('MongoDB connected!\n'))
  .catch(err => process.stdout.write(err));

app.listen(port, () => process.stdout.write(`Listening on port ${port}\n`));
