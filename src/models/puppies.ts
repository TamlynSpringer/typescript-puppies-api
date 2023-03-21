import mongoose from 'mongoose';

interface IPuppy {
  name: string;
  breed: string;
  size: string;
  age: number;
};

interface PuppyModelInterface extends mongoose.Model<PuppyDoc> {
  build(attr: IPuppy): PuppyDoc
};

interface PuppyDoc extends mongoose.Document {
  name: string;
  breed: string;
  size: string;
  age: number;
};

const puppySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

puppySchema.statics.build = (attr: IPuppy) => {
  return new Puppy(attr)
};

const Puppy = mongoose.model<PuppyDoc, PuppyModelInterface>('Puppy', puppySchema);

Puppy.build({
  name: 'Bianca',
  breed: 'Jack Russell',
  size: 'small',
  age: 17
});

export { Puppy };
