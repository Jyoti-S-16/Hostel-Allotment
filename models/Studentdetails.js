const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const StudentSchema = new Schema({
   name:{
	   type:String
   },
   rollNo:{
	   type:String
   },
   CGPI:{
	   type:Number
   },
   Branch:{
	   type:String
   },
  gender: {
    type: String,
    enum: ['M', 'F'],
    required: true,
  }
},{
	timestamps:true,
});

module.exports = Student = mongoose.model("hstudent", StudentSchema);
