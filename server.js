let express = require("express");
let states_api = require("./routes/states");

let app = express();

app.use(express.json());

app.use("/api", states_api);

app.use(function (req, res, next) {
  res.status(404).send("Not Found");
  // For any request we haven't specifically created
});

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send("Server error");
  // We want to try our best to respond to every request
});

let server = app.listen(process.env.PORT || 3000, function () {
  console.log("server running on port", server.address().port);
});
