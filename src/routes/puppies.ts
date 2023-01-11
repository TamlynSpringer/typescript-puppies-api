import express, { Request, Response } from 'express';
import { Puppy } from '../models/puppies';

const router = express.Router();

router.get('/api',async (req: Request, res: Response) => {
  return res.status(200).json({ api: 'is working as it should' });
});

router.get('/api/puppies', [], async (req: Request, res: Response) => {
  const puppies = await Puppy.find({});
  return res.status(200).json(puppies)
});

router.get('/api/puppies/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const puppy = await Puppy.findById(id);
  return puppy ? res.status(200).json(puppy) : res.status(404).json({ message: 'Puppy not found'})
});

router.post('/api/puppies', async (req: Request, res: Response) => {
  const { name, breed, size, dob } = req.body;
  const puppy = Puppy.build({ name, breed, size, dob })
  await puppy.save();
  return res.status(201).json(puppy)
});

router.put('/api/puppies/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const puppy = await Puppy.findByIdAndUpdate(id);
  if (puppy) {
    puppy.set(req.body).save();
    return res.status(201).json(puppy)
  } else {
    return res.status(404).json({ message: 'Puppy not found'})
  }
});

router.delete('/api/puppies/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const puppy = await Puppy.findByIdAndDelete(id);
  puppy ? res.status(201).json({ message: 'Puppy removed' }) : res.status(404).json({ message: 'Puppy not found'})
});


export { router as puppyRouter };