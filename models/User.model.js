var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Any = mongoose.Schema.Types.Mixed;
// Define collection and schema for Items
var User = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    surname: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,

    },
    location: {
      type: String,
      required: true,
    },
    updatedAt: Any,
    createdAt: Any,
  },
  {
    collection: "user",
  }
);

module.exports = mongoose.model("User", User);
