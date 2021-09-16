const User = require('../models/User');
const Attendence = require('../models/Attendence');
const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');

const UserController = () => {
  const register = async (req, res) => {
    try {
      let { email, password, macId } = req.body;
      // validate
      if (!email || !password || !macId)
        return res.status(400).json({ msg: "Not all fields have been entered." });
      const existingUser = await User.findOne({
        where: {
          email: email
        },
      })
      if (existingUser)
        return res
          .status(400)
          .json({ msg: "An account with this email already exists." });
      const existingMac = await User.findOne({
        where: {
          macId: macId
        },
      })
      if (existingMac)
        return res
          .status(400)
          .json({ msg: "Mac Address already registered." });
      const newUser = ({
        email,
        password,
        macId,
      });
      const data = await User.create(newUser);
      return res.status(201).json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  const login = async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
      try {
        const user = await User
          .findOne({
            where: {
              email,
            },
          });

        if (!user) {
          return res.status(400).json({ msg: 'Bad Request: User not found' });
        }

        if (bcryptService().comparePassword(password, user.password)) {
          const token = authService().issue({ id: user.id });

          return res.status(200).json({ token, user });
        }

        return res.status(401).json({ msg: 'Invalid Email and Password' });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Email or password is wrong' });
  };

  const validate = (req, res) => {
    return res.status(200).json(req.me);
  };


  const getAll = async (req, res) => {
    try {
      const users = await User.findAll();

      return res.status(200).json({ users });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const userAttendence = async (req, res) => {
    try {
      const userId = req.me.id;
      const attendence = await Attendence.findAll({
        where: {
          UserId: userId
        }
      });

      return res.status(200).json(attendence);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const allData = async (req, res) => {
    try {
      const user = await User
        .findAll({
          include: [
            {
              model: Attendence,
              required: true
            },
          ],
          raw: true, // <----------- Magic is here
          nest: true // <----------- Magic is here
        });
      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };



  return {
    register,
    login,
    validate,
    getAll,
    userAttendence,
    allData
  };
};

module.exports = UserController;
