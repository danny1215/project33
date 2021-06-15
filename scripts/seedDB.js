const mongoose = require("mongoose");
const db = require("../models");

// This file empties the developer collection and inserts the developer below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/project33"
);

const developerSeed = [
  {
    DeveFirst_Name: "dany",
    DeveLast_name: "mes",
    DeveRole: "developer",
  },
  {
    DeveFirst_Name: "Zaid",
    DeveLast_name: "Alhara",
    DeveRole: "manager",
   }
  
];

db.Developer.remove({})
  .then(() => db.Developer.collection.insertMany(developerSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// db.Developer.remove({})
// .then(() => db.Developer.collection.insertMany(developerSeed))
// .then((data) => {
//   console.log(data.result.n + " records inserted!");
//   process.exit(0);
// })
// .catch((err) => {
//   console.error(err);
//   process.exit(1);
// });




// const mongoose = require("mongoose");
// const db = require("../models");

// // This file empties the developer collection and inserts the developer below

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/project33"
// );

// const developerSeed = [
//   {
//     DeveFirst_Name: "dany",
//     DeveLast_name: "mes",
//     DeveRole: "developer",
//   },
//   {
//     DeveFirst_Name: "Zaid",
//     DeveLast_name: "Alhara",
//     DeveRole: "manager",
//   }
  
// ];

// db.Developer.remove({})
// .then(() => db.Developer.collection.insertMany(developerSeed))
// .then((data) => {
//   console.log(data.result.n + " records inserted!");
//   process.exit(0);
// })
// .catch((err) => {
//   console.error(err);
//   process.exit(1);
// });


  