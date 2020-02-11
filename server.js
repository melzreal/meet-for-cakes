const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const db = require("./config/keys").URI;
const app = express();
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profiles = require("./routes/api/profiles");

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("oi oiiufffoo");
});

app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profiles", profiles);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//prepare app for heroku deployment
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
