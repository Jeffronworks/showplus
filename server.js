const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profiles = require("./routes/api/profiles");
const posts = require("./routes/api/posts");

const app = express();

//DB config
const db = require("./config/keys").mongoURI;

// connect to mongodb
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err.name));

app.get("/", (req, res) => res.send("Hello sooohow"));

// Use Routes
app.use("/api/users", users);
app.use("/api/profiles", profiles);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running at port ${port}`));
