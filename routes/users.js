const express = require("express");
const router = express.Router();

const {
  addUser,
  updateUser,
  deleteUser,
  doSignin,
} = require("../controllers/users.controller");

router.post("/adduser", addUser);
router.post("/updateuser", updateUser);
router.post("/deleteuser", deleteUser);
router.post("/login", doSignin);

module.exports = router;
