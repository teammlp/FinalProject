const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/FinalProject"
);

const userSeed = [
    {
        username: "Pearl_7",
        password: "Oyunbaatar_7",
        date: new Date(Date.now())
    }
];

  const userFormSeed = [
    {
      company: "Microsoft",
      position: "COO",
      detail:
        "Company detail display here",
      date: new Date(Date.now()),
      location: "chicago, il"
    },
    {
      company: "Facebook",
      position: "CEO",
      detail:
        "Company detail display here",
      date: new Date(Date.now()),
      location: "chicago, il"
    }
  ];
  
  db.UserForm
    .remove({})
    .then(() => db.UserForm.collection.insertMany(userFormSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
