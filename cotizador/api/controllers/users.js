const User = require("../models/Users");



function findAllUser(req, res, next) {
  try {
    User.find().then((user) => {
      console.log(user);
      res.json(user);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function addUser(req, res, next) {
  const { user } = req.body;

  try {
    User.create(user).then((user) => {
      console.log(user);
      res.json(user);
    });
  } catch (error) {
    res.send(error.message);
  }
}
module.exports = {
  findAllUser,
  addUser,
};
