var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Any = mongoose.Schema.Types.Mixed;
// Define collection and schema for Items
var Ownership = new Schema(
  {
    vehicleid: {
      type: String,
      required: true,
    },
    ownerid: {
      type: String,
      required: true,
    },
    updatedAt: Any,
    createdAt: Any,
  },
  {
    collection: "ownership",
  }
);

module.exports = mongoose.model("Ownership", Ownership);
