const router = require("express").Router();
const passport = require("passport");
const Students = require("../../models/Studentdetails");
// Staff model
const Staff = require("../../models/Staff");
const Room = require("../../models/Roomsm");
const { studentAdd, roomAdd } = require("../../controllers/Roomregistration");
// Add validations
const staffValidation = require("../../validation/staff.js");
const Student = require("../../models/Student");
router.post(
  "/addstudent",
  //passport.authenticate('jwt',{session:false}),
  studentAdd
);
router.post("/roomAdd", roomAdd);
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Staff.find()
      .then((data) => res.json(data))
      .catch((err) =>
        res.json({ ...err, message: "Failed to fetch staff details" })
      );
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = staffValidation(req.body);
    if (!isValid) return res.status(400).json(errors);

    const newStaff = new Staff(req.body);

    newStaff
      .save()
      .then((data) =>
        res.json({ success: true, message: "Staff has been saved." })
      )
      .catch((err) => res.json({ ...err, message: "Failed to save staff" }));
  }
);

router.delete(
  "/:_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { _id } = req.params;

    Staff.findByIdAndDelete({ _id })
      .then((status) =>
        res.json({ success: true, message: "Staff has been deleted." })
      )
      .catch((err) => res.json({ ...err, message: "Failed to delete staff" }));
  }
);

router.put(
  "/availability/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { id } = req.params;
    const { isAvailable } = req.body;
    Staff.findByIdAndUpdate(id, { $set: { isAvailable } })
      .then((data) =>
        res.status(200).json({
          message: "Staff availability has been updated.",
          success: true,
        })
      )
      .catch((err) =>
        res.json({ ...err, message: "Failed to update staff availability." })
      );
  }
);

router.get(
  "/RoomallocationForHostel",
  //  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const AllStudents = await Students.aggregate([
      {
        $sort: { CGPI: -1 },
      },
    ]);
    let Array1 = [];
    AllStudents.forEach(async (e) => {
      let d = await Students.findOne({ _id: e._id });

      if (d.RoomPreference.length == 0) {
        console.log("Name", d.name, d._id);
        Array1.push(d._id);
        console.log("Array1", Array1);
      } else {
        let j = true;
        d.RoomPreference.forEach(async (f) => {
          let g = await Room.findOne({ _id: f._id });
          if (j === false) {
            j = false;
          } else if (f.isBooked == true) {
            if (i == e.Rooms.length - 1) {
              Array1.push(e._id);
            }
          } else {
            g.isBooked = true;
            g.StudentData.push(d._id);
            d.RoomID = g._id;
            d.RoomName = g.Name;
            await g.save();
            j = false;
          }
        });
        await d.save();
      }
    });
    const Rooms = await Room.find({ isBooked: false });
    console.log(Array1, "hieee", Rooms);
    let i = 0;
    if (Array1.length > 0) {
      Array1.forEach(async (e) => {
        console.log("hi hello how are you", e);
        let b = await Students.findOne({ _id: e });
        if (b !== null) {
          Rooms[i].isBooked = true;
          Rooms[i].StudentData = b._id;
          b.RoomID = Rooms[i]._id;
          b.RoomName = Rooms[i].Name;
          await b.save();
          await Rooms[i].save();
        }
        i++;
      });
      await res.status(201).json({
        message: "Done",
      });
    } else {
      res.status(201).json({
        message: "Done",
        AllStudents,
        Array1,
      });
    }
  }
);

module.exports = router;
