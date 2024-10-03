import { Schema, model } from "mongoose";
const Person = new Schema(
  {
    Name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
    },
    favoriteFoods: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);
export default model("Person", Person);
