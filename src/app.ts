import express, { Application } from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { puppyRouter } from './routes/puppies';

const app: Application = express();
const options = { origin: 'http://localhost:3001' }

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.85ehy59.mongodb.net/puppy-api?`;


mongoose.connect(MONGO_URL, () => {
  console.log('Connected to MongoDB');
});

app.use(json());
app.use(cors(options))
app.use(puppyRouter);

export default app;

