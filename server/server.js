const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const UserModel = require("./models/Users");
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud123");

// Get the default connection
const db = mongoose.connection;

// Event listeners for connection status
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB successfully!");
});

app.get("/", (req, res) => {
  UserModel.find({})
    .then((usersd) => res.json(usersd))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;

  UserModel.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, email: req.body.email, age: req.body.age }
  )
    .then((usersd) => res.json(usersd))
    .catch((err) => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findOneAndDelete({ _id: id })
    .then((usersd) => res.json(usersd))
    .catch((err) => res.json(err));
});

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((usersd) => res.json(usersd))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((usersd) => res.json(usersd))
    .catch((err) => res.json(err));
});

app.listen(8000, () => {
  console.log("server is running ");
});
