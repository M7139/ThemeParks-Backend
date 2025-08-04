const { Schema } = require('mongoose')

const RideSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String , required: true},
    description: { type: String },
    img: { type: String }
  },
  { timestamps: true }
)

module.exports = RideSchema
