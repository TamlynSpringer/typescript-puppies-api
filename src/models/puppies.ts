import mongoose from 'mongoose';

interface IPuppy {
  name: string;
  breed: string;
  size: string;
  dob: string;
};

interface PuppyModelInterface extends mongoose.Model<PuppyDoc> {
  build(attr: IPuppy): PuppyDoc
};


interface PuppyDoc extends mongoose.Document {
  name: string;
  breed: string;
  size: string;
  dob: string;
}

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
  dob: {
    type: String,
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
  dob: '2004'
});

export { Puppy }