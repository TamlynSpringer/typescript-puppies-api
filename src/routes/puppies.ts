import express, { Request, Response } from 'express';
import { Puppy } from '../models/puppies';

const router = express.Router();

router.get('/api/puppies', [], async (req: Request, res: Response) => {
  const puppy = await Puppy.find({})
  return res.status(200).json(puppy)
});

router.post('/api/puppies', async (req: Request, res: Response) => {
  const { name, breed, size, dob } = req.body;
  const puppy = Puppy.build({ name, breed, size, dob })
  await puppy.save();
  return res.status(201).json(puppy)
});


export { router as puppyRouter }