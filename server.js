require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
bodyParser = require("body-parser");
//  config = require("./core/db");

const usersRoutes = require("./routes/users");
const vehiclesRoutes = require("./routes/vehicles");
const ownershipRoutes = require("./routes/ownership");


mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log("Can not connect to the database" + err);
  });
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

//routes
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/vehicles", vehiclesRoutes);
app.use("/api/v1/ownership", ownershipRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Listening on Port" + port);
});

// module.exports = app;
