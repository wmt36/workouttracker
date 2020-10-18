const express = require("express")
const mongoose = require("mongoose");
const apiRoutes = require("./routes/api.js")
const htmlRoutes = require("./routes/view.js")

const PORT = process.env.PORT || 3131;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// routes
app.use(apiRoutes);
app.use(htmlRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
