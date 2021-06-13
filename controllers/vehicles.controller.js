var Vehicle = require("../models/Vehicle.model")
var MD5 = require("md5");

require("dotenv").config();

//add
exports.addVehicle = (req, res) => {
  postData = req.body;
  console.log(postData);
  var newVehicle = new Vehicle(postData);
  newVehicle.updatedAt = new Date();
  newVehicle.createdAt = new Date();
  
  newVehicle.save((err, data) => {
    if (err) {
      return res.json({
        status: 500,
        message: "Failed to create account.",
        data: err,
      });
    } else {
      return res.json({
        status: 200,
        message: "Account created succesfully.",
        data: data,
      });
    }
  });
};
//do signing