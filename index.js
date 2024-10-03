import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import Person from "./schema.js";

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => {
    console.log(`Connected to the database @ ${result.connection.host}`);
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// // Create and save a new person
// const person = new Person({
//   Name: "Godiya Izuoba",
//   age: 30,
//   favoriteFoods: ["Pizza", "Burger"],
// });

// person
//   .save()
//   .then((data) => {
//     console.log("Person saved successfully:", data);
//   })
//   .catch((err) => {
//     console.error("Error saving person:", err);
//   });

// // Create multiple people
// const arrayOfPeople = [
//   { Name: "Jane Doe", age: 25, favoriteFoods: ["Sushi", "Tacos"] },
//   { Name: "John Smith", age: 40, favoriteFoods: ["Pasta", "Steak"] },
// ];

// Person.create(arrayOfPeople)
//   .then((people) => {
//     console.log("People created successfully:", people);
//   })
//   .catch((err) => {
//     console.error("Error creating people:", err);
//   });

// // Find people by name
// Person.find({ Name: "Jane Doe" })
//   .then((people) => {
//     console.log("People found:", people);
//   })
//   .catch((error) => {
//     console.error(`Error finding people: ${error.message}`);
//   });

// // Find one person by favorite food
// Person.findOne({ favoriteFoods: "Pizza" })
//   .then((person) => {
//     console.log("Person found:", person);
//   })
//   .catch((err) => {
//     console.error("Error finding person:", err);
//   });

// // Find person by _id
// const personId1 = "66fd490dbc5a033ccae7bb44"; // Set actual _id here

// Person.findById(personId1)
//   .then((person) => {
//     console.log("Person found by ID:", person);
//   })
//   .catch((err) => {
//     console.error("Error finding person by ID:", err);
//   });

// // Find and update a person by _id
// const personId2 = "66fe773c4ab77ffe1f5efc34"; // Set actual _id here

// Person.findById(personId2)
//   .then((person) => {
//     person.favoriteFoods.push("Hamburger");
//     return person.save();
//   })
//   .then((updatedPerson) => {
//     console.log("Updated person:", updatedPerson);
//   })
//   .catch((err) => {
//     console.error("Error updating person:", err);
//   });

// // Find one person by name and update their age
// const personName = "Jane Doe";

// Person.findOneAndUpdate({ Name: personName }, { age: 20 }, { new: true })
//   .then((updatedPerson) => {
//     console.log("Updated person:", updatedPerson);
//   })
//   .catch((err) => {
//     console.error("Error updating person:", err);
//   });

// // Find and remove person by _id
// const personId3 = "66fe74ab6690d45b31466013"; // Set actual _id here

// Person.findByIdAndDelete(personId3)
//   .then((removedPerson) => {
//     console.log("Removed person:", removedPerson);
//   })
//   .catch((err) => {
//     console.error("Error removing person by ID:", err);
//   });

// // Remove all people with the name "Mary"
// Person.deleteMany({ Name: "Godiya aduwak" })
//   .then((result) => {
//     console.log("People removed:", result);
//   })
//   .catch((err) => {
//     console.error("Error removing people:", err);
//   });

// // Find people who like burritos, sort by name, limit to 2, and hide the age field
Person.find({ favoriteFoods: "burritos" })
  .sort({ name: 1 }) // Sort by name in ascending order
  .limit(2) // Limit results to 2 documents
  .select({ age: 0 }) // Exclude the age field
  .exec()
  .then((people) => {
    console.log("People found:", people);
  })
  .catch((err) => {
    console.error("Error querying people:", err);
  });
