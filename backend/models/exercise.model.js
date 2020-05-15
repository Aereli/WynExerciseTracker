const mongoose = require("mongoose")

const Schema = mongoose.Schema

const exerciseSchema = new Schema(
  {
    username: { type: String, required: true },
    descripttion: { type: String, required: true },
    duration: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const Exercise = mongoose.model("Exercise", exerciseSchema)

module.exports = Exercise
