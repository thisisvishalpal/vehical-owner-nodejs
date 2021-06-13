const express = require("express");
const router = express.Router();

const {
  addVehicle,
} = require("../controllers/vehicles.controller");

router.post("/addVehicle", addVehicle);


module.exports = router;
