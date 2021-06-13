var User = require("../models/User.model");
var MD5 = require("md5");

require("dotenv").config();

//add
exports.addUser = (req, res) => {
  postData = req.body;
  console.log(postData);
  var newUser = new User(postData);
  newUser.updatedAt = new Date();
  newUser.createdAt = new Date();
  if (newUser.password) {
    newUser.password = MD5(postData.password);
  }
  newUser.save((err, data) => {
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
exports.doSignin = (req, res) => {
  // DO SIGNIN
  var postData = req.body;
  console.log(postData);
  var where = {
    email: postData.email,
    password: MD5(postData.password),
  };
  User.findOne(where, function (err, userResp) {
    if (userResp) {
      // req.session.current_user = userResp;
      delete userResp.password;
      res.json({
        status: 200,
        message: "Logged in successfully.",
        data: userResp,
      });
    } else {
      res.json({
        status: 500,
        message: "There is some error while fetching the user!",
        data: err,
      });
    }
  });
};
//update
exports.updateUser = (req, res) => {
  postData = req.body;
  console.log(postData);
  console.log(postData.email);
  let where = { email: postData.email };
  User.findOneAndUpdate(where, postData, (err, obj) => {
    if (!err) {
      return res.json({
        status: 200,
        message: "Account Updated succesfully.",
        data: obj,
      });
    } else {
      return res.json({
        status: 500,
        message: "Failed to create account.",
        data: err,
      });
    }
  });
};

exports.deleteUser = (req, res) => {
  postData = req.body;
  userEmail = postData.email;
  User.deleteOne({ email: userEmail }).exec((err, obj) => {
    if (err) {
      return res.json({
        status: 500,
        message: "failed to deleted account.",
        data: err,
      });
    } else {
      return res.json({
        status: 200,
        message: "Account Deleted Successfully succesfully.",
        data: obj,
      });
    }
  });
};

exports.authentication = (req, res) => {
  var allData = req.body;
  0;
  if (req.session.current_user) {
    return res.json({
      status: 200,
      message: "Api authenticated Successfully.",
      current_user: req.session.current_user,
    });
  } else {
    return res.json({
      status: 500,
      message: "Authentication failed",
      current_user: null,
    });
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  return res.json({
    status: 200,
    message: "Logouted successfully.",
  });
};
