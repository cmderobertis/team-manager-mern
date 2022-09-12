const mongoose = require("mongoose")

const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: [2, "Name must be at least 2 characters"],
      required: [true, "Name is required"],
    },
    position: {
      type: String,
    },
    status1: { type: String },
    status2: { type: String },
    status3: { type: String },
  },
  { timestamps: true }
)
module.exports = mongoose.model("Player", PlayerSchema)
