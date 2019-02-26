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

    const jobBoardSeed = {
      position: ["Front-End Developer"],
      description: "For David Goggins, childhood was a nightmare - poverty, prejudice, and physical abuse colored his days and haunted his nights. But through self-discipline, mental toughness, and hard work, Goggins transformed himself from a depressed, overweight young man with no future into a U.S. Armed Forces icon and one of the world's top endurance athletes. The only man in history to complete elite training as a Navy SEAL, Army Ranger, and Air Force Tactical Air Controller, he went on to set records in numerous endurance events, inspiring Outside magazine to name him The Fittest (Real) Man in America. In Can't Hurt Me, he shares his astonishing life story and reveals that most of us tap into only 40% of our capabilities. Goggins calls this The 40% Rule, and his story illuminates a path that anyone can follow to push past pain, demolish fear, and reach their full potential.",
      image: "https://books.google.com/books/content/images/frontcover/neh6DwAAQBAJ?fife=w400-h600",
      link: "https://play.google.com/store/books/details?id=neh6DwAAQBAJ&source=gbs_api",
      Company: "Can't Hurt Me",
  }
  
  db.JobBoard
    .remove({})
    .then(() => db.JobBoard.collection.insertMany(jobBoardSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });