var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Any = mongoose.Schema.Types.Mixed;
// Define collection and schema for Items
var Vehicle = new Schema(
  {
    vehicleName: {
      type: String,
      trim: true,
      required: true,
    },
    vehicleBrand: {
      type: String,
      trim: true,
      required: true,
    },
    vehicleNumber: {
      type: String,
      required: true,
      unique: true,

    },
    updatedAt: Any,
    createdAt: Any,
  },
  {
    collection: "vehicle",
  }
);

module.exports = mongoose.model("Vehicle", Vehicle);
