const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
//port constants
const APP_PORT = process.env.PORT || 3001;
const MONGOD_PORT = process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker";
// define new express app
const app = express();
//set app options
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//use public directory
app.use(express.static("public"));
//connects db
mongoose.connect( MONGOD_PORT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
//using api routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

//starts app
app.listen(APP_PORT, () => {
  console.log(`App running on port ${APP_PORT}!`);
});