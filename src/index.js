import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './config/express.config';
import db from './db/db';

dotenv.config();

const port = process.env.port || '8080';

mongoose.connect(db, { useCreateIndex: true, useNewUrlParser: true })
  .then(() => process.stdout.write('MongoDB connected!\n'))
  .catch(err => process.stdout.write(err));

app.listen(port, () => process.stdout.write(`Listening on port ${port}\n`));
