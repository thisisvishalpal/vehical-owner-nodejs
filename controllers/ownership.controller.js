var Ownership = require("../models/Ownership.model");
var Vehicles = require("../models/Vehicle.model");
var MD5 = require("md5");

require("dotenv").config();

//add
exports.addOwnership = (req, res) => {
  postData = req.body;
  console.log(postData);
  var newOwenership = new Ownership(postData);
  newOwenership.updatedAt = new Date();
  newOwenership.createdAt = new Date();

  newOwenership.save((err, data) => {
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
//do signingd

exports.vehicles_occupied = (req, res) => {
  postData = req.body;
  Vehicles.find().exec((err,obj)=>{
    if(!obj){
      console.log(err);
    }else{
      console.log(obj);
    }
  })
  // User.findOneAndUpdate(where, postData, (err, obj) => {
  //   if (!err) {
  //     return res.json({
  //       status: 200,
  //       message: "Account Updated succesfully.",
  //       data: obj,
  //     });
  //   } else {
  //     return res.json({
  //       status: 500,
  //       message: "Failed to create account.",
  //       data: err,
  //     });
  //   }
  // });
};

