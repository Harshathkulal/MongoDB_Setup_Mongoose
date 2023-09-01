//Creating DataBase
const mongoose=require("mongoose");

//Connecting to MongoDB
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/UserNameDB');
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

  //Mongoose Schema
  const personSchema = new mongoose.Schema({
    name: String
  });

  //Mongoose Model
  const Person = mongoose.model('Person', personSchema);

  //Mongoose Document
  const Person1 = new Person({ name: 'Harshath' });
console.log(Person1.name); // 'Harshath'