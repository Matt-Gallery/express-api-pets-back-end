import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 0,
      required: true,
    },
    breed: String,
  });

const Pet = mongoose.model("Pet", petSchema);

export default Pet;