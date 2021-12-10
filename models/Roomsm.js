const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomsSchema = new Schema({
  Name: {
    type: String,
  },
  roomNumber: {
    type: Number,
  },
  block: {
    type: String,
    enum: ["A", "B", "C", "D"],
    required: true,
    trim: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  isBooked: {
    type: Boolean,
    default: false,
  },
  count: {
    type: Number,
    default: 0,
  },
  StudentData: [Schema.Types.ObjectId],
});

module.exports = Student = mongoose.model("roomsm", RoomsSchema);
