let express = require("express");
let States = require("../models").States;

let router = express.Router();

router.get("/states", function (req, res, next) {
  States.findAll({ order: ["name"] })
    .then((states) => {
      return res.json(states);
    })
    .catch((err) => next(err)); // passes error handling off to another file
});

router.get("/state/:name", function (req, res, name) {
  let stateName = req.params.name;
  States.findOne({ where: { name: stateName } })
    .then((state) => {
      if (state) {
        return res.json(state);
      } else {
        return res.status(404).send("State not found");
      }
    })
    .catch((err) => next(err));
});

// router.get("/visited", function (req, res, next) {
//   States.findAll({ order: ["name"] })
//     .then((states) => {
//       return res.json(states);
//     })
//     .catch((err) => next(err)); // passes error handling off to another file
// });

router.get("/visited", function (req, res, next) {
  States.findAll({ order: ["name"] })
    .then((states) => {
      let visitedStates = states.filter((state) => state.visited === true);
      if (visitedStates) {
        return res.json(visitedStates);
      } else {
        return res.status(404).send("You've visited 0 states");
      }
    })
    .catch((err) => next(err));
});

router.patch("/states/:name", function (req, res, next) {
  let stateName = req.params.name;
  let stateVisited = req.body.visited;

  States.update(
    { visited: stateVisited },
    { where: { name: stateName } }
    // Different from student express app. This is changing one parameter (visited) where the name matches instead of overwriting the whole State record
  )
    .then((rowsUpdated) => {
      let numberOfRowsUpdated = rowsUpdated[0];
      // This is logic to see if we were successful in updating a row
      if (numberOfRowsUpdated == 1) {
        return res.send("ok");
      } else {
        return res.status(404).send("State not found");
      }
    })
    .catch((err) => next(err));
});

module.exports = router;
