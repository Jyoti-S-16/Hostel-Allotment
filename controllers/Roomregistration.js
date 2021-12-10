const Student = require("../models/Studentdetails");
const Room = require("../models/Roomsm");
const { ObjectId } = require("mongoose");

exports.RoomRegistration = async (req, res) => {
  const { name, rollNo, Array1 } = req.body;
  const find = await Student.findOne({ rollNo });
  console.log(find);
  if (find == undefined || find == {}) {
    return res.status(201).json({
      message: "Please Contact warden you are not present in our database",
    });
  } else {
    if (find.Booked === true) {
      res.status(201).json({
        message: "You have already booked  a room for yourself",
      });
    } else {
      let i = 1;
      let array1 = [];
      let array2 = [];
      find.RoomPreference = Array1;
      Array1.forEach(async (e) => {
        let Room1 = await Room.findOne({
          _id: e,
        });
        if (Room1 !== undefined && Room1 !== null) {
          Room1.count += 1;
          array2.push(i);
          i++;
          const obb = {
            ID: String(Room1._id),
            name: Room1.Name,
          };
          array1.push(obb);
          await Room1.save();
          
        } else {
          //problem will occur here cannot set headers after they are sent to client
          res.status(201).json({
            message: "Please try again later",
          });
        }
      });
      find.Booked = true;
      //find.RoomPreference = array1;
      await find.save();
      console.log("saved 2");
      res.status(201).json({
        message:
          "Succesfull!! in case your priorites get filled room will be assigned randomly",
        array1,
        array2,
      });
    }
  }
};

exports.studentAdd = async (req, res) => {
  const { name, rollNo, CGPI, Branch, Year, gender } = req.body;
  let find = await Student.findOne({ rollNo });

  if (find !== null) {
    res.status(201).json({ message: "Student already there", find });
  } else {
    const obje = {
      name,
      rollNo,
      CGPI,
      Branch,
      Year,
      gender,
    };

    await Student.create(obje);
    res.status(201).json({
      message: "Succesfull!",
    });
  }
};
exports.Rooms = async (req, res) => {
  let Rooms = await Room.find();
  res.status(201).json({
    message: Rooms,
  });
};
exports.roomAdd = async (req, res) => {
  const { roomNumber, block, capacity } = req.body;
  console.log(capacity, block, "hiii");
  let find = await Room.findOne({ roomNumber });
  if (find == null) {
    const obj = {
      Name: block + "-" + roomNumber,
      block,
      roomNumber,
      capacity,
    };
    await Room.create(obj);
    res.status(201).json({
      message: "Room created Successfully",
    });
  } else {
    res.status(201).json({
      message: "Room already exist",
    });
  }
};
