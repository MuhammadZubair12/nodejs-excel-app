const Attendence = require("../models/Attendence");
const User = require('../models/User');
const moment = require('moment');

const AttendenceController = () => {
  const markAttendence = async (req, res) => {
    try {
      let { mark, fine } = req.body;

      const alreadyMarked = await Attendence.findOne({
        where: {
          UserId: req.me.id,
          markedDate: moment().format('YYYY-MM-DD')
        },
      })

      if (alreadyMarked)
        return res.json({ msg: "You had already marked your attendence" });

      // validate
      const newAttendence = {
        mark,
        fine,
        UserId: req.me.id,
      };
      const data = await Attendence.create(newAttendence);
      return res.status(201).json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  return {
    markAttendence,
  };
};

module.exports = AttendenceController;
