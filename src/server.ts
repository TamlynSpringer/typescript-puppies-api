import express from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import { puppyRouter } from './routes/puppies';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.85ehy59.mongodb.net/puppy-api?`;

const app = express();
app.use(json());
app.use(puppyRouter);

mongoose.connect(MONGO_URL, () => {
  console.log('Connected to MongoDB');
})

app.listen(5050, () => {
  console.log('Server is listening on port 5050');
})