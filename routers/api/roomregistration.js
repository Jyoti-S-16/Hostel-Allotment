const router = require("express").Router();
const passport = require("passport");
const Room = require("../../models/Roomsm");
const { validateRoomInput } = require("../../validation/room");
const {
  RoomRegistration,
  Rooms,
} = require("../../controllers/Roomregistration");

router.post("/registerprioritiesforroom", RoomRegistration);
router.get("/getAllRooms", Rooms);
module.exports = router;
