const User = require("../models/Users");

function findAllUser(req, res, next) {
  // try {
  //   User.find().then((user) => {
  //     console.log(user);
  //     res.json(user);
  //   });
  // } catch (error) {
  //   res.send(error.message);
  // }
  res.send("Todo ok");
}

function addUser(req, res, next) {
  const user = req.body;
  try {
    User.create(user).then((user) => {
      res.json(user);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function existUser(req, res, next) {
  const { sub } = req.query;

  try {
    User.exists({ sub }, function (err, doc) {
      const exist = doc ? true : false;

      if (doc) {
        User.findById(doc).then((user) => {
          res.json(user);
        });
      } else {
        res.status(200).send(exist);
      }

      if (err) {
        console.log(err);
      }
    });
  } catch (error) {
    res.send(error.message);
  }
}

module.exports = {
  findAllUser,
  addUser,
  existUser,
};
