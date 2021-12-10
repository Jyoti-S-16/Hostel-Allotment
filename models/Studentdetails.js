const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const StudentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rollNo: {
      type: String,
      required: true,
    },
    CGPI: {
      type: Number,
      required: true,
    },
    Branch: {
      type: String,
      required: true,
    },
    Year: {
      type: Number,
    },
    Booked: {
      type: Boolean,
      default: false,
    },
    RoomPreference: [Schema.Types.ObjectId],
    RoomName:{
		type:String
	},
	RoomID:{
		type:Schema.Types.ObjectId,
		ref:'roomsm'
	},
    whoBooked: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["M", "F"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("hstudent", StudentSchema);
