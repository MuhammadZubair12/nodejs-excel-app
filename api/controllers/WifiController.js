const Wifi = require('../models/Wifi');

const WifiController = () => {
  const add = async (req, res) => {
    try {
      let { ssid } = req.body;
      // validate
      if (!ssid)
        return res.status(400).json({ msg: "SSID field should not be empty" });
          const newAttendence = ({
            ssid
          });
          const data = await Wifi.create(newAttendence);
          return res.status(201).json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

const update = (req, res) => {
  const { body } = req;
  return Wifi.findOne({
    where: { id: req.params.id },
  })
    .then((data) => {
      if (!data) {
        return res
          .status(400)
          .json({ msg: "Data not found " });
      }
      Wifi.update(
        {
          ssid: body.ssid,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
        .then(() => {
          res.status(200).json({ msg: "Data Updated Successfully" });
        })
        .catch(() => {
          res.status(500).json({ msg: "Internal Server Error" });
        });
    })
    .catch(() => {
      res.status(500).json({ msg: "Internal Server Error " });
    });
};

const getAll = async (req, res) => {
  try {
    const detail = await Wifi.findAll();

    return res.status(200).json(detail);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: 'Internal server error' });
  }
};

  return {
    add,
    update,
    getAll
  };
};

module.exports = WifiController;
