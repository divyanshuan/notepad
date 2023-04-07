const express = require("express");
const path = require("path");

const app = express();
const noteRoutes = require("./routes/notes");
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/notes", noteRoutes);

app.use((req, res, next) => {
  res.send("<h1>hello world</h1>");
});

app.listen(3000);
