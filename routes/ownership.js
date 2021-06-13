const express = require("express");
const router = express.Router();

const {
  addOwnership,
} = require("../controllers/ownership.controller");

router.post("/addownership", addOwnership);

module.exports = router;
