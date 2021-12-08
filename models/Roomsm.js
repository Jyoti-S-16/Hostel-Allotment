const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomsSchema = new Schema({
  block: {
    type: String,
    enum: ["A", "B", "C", "D"],
    required: true,
    trim: true,
  },
  capacity:{
	  type:Number,
	  required:true,
  },
  StudentData:[
	  type:mongoose.Schema.Types.ObjectId,
	  ref:'Hstudent'
  ]
  
});

module.exports = Student = mongoose.model("room", RoomSchema);
