const express = require("express");
const router = express.Router();

const {
  addOwnership,vehicles_occupied
} = require("../controllers/ownership.controller");

router.post("/addownership", addOwnership);
router.get("/vehicles_occupied", vehicles_occupied);

module.exports = router;
