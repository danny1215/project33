const developerRoutes = require("express").Router();
const DeveloperModel = require("../../models/Developer");


// developerRoutes.get("/api/developer", async (request, response) => {
//   const developer = await DeveloperModel.find({});

//   try {
//     response.send(developer);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });


developerRoutes.route('/').get(function(req, res) {
  DeveloperModel.find(function(err, developer) {
      if (err) {
          console.log(err);
      } else {
          res.json(developer);
      }
  });
});


developerRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  DeveloperModel.findById(id, function(err, developer) {
      res.json(developer);
  });
});



developerRoutes.route('/update/:id').post(function(req, res) {
  DeveloperModel.findById(req.params.id, function(err, developer) {
      if (!developer)
      
          res.status(404).send("data is not found");
      else

      developer.DeveFirst_Name = req.body.DeveFirst_Name;
      developer.DeveLast_name = req.body.DeveLast_name;
      developer.DeveRole = req.body.DeveRole;
      developer.Job_completed=req.body.Job_completed;

      developer.save().then(developer => {
              res.json('developer updated!');
          })
          .catch(err => {
              res.status(400).send("Update not possible");
          });
  });
});


developerRoutes.route('/add').post(function(req, res) {
  let developer = new DeveloperModel(req.body);
  developer.save()
      .then(developer => {
          res.status(200).json({'developer': 'developer added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new developer failed');
      });
});




// router.get("/api/developer/:id", async (request, response) => {
//   const developer = await DeveloperModel.findbyid({});

//   try {
//     response.send(developer);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });



// router.post("/api/developer", async (request, response) => {
//   const developer = new DeveloperModel(request.body);

//   try {
//     await developer.save();
//     response.send(developer);
//   } catch (error) {
//     response.status(500).send("nothing here");
//   }
// });

// router.patch("/api/developer/:id", async (request, response) => {
//   try {
//     await DeveloperModel.findByIdAndUpdate(request.params.id, request.body);
//     await DeveloperModel.save();
//     response.send(developer);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });




// router.delete("/api/developers/:id", async (request, response) => {
//   try {
//     const developer = await developerModel.findByIdAndDelete(request.params.id);

//     if (!developer) response.status(404).send("No item found");
//     response.status(200).send("deleted");
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });


module.exports = developerRoutes;