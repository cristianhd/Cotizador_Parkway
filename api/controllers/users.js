const User = require("../models/Usuarios");

function findAllUser(req, res, next) {
  try {
    User.find().then((user) => {
      res.json(user);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function addUser(req, res, next) {
  const users = req.body;
  const { nickname } = users;
  try {
    User.exists({ nickname }, function (err, doc) {
      // si el usuario no existe creo el usuario
      if (doc === null) {
        User.create(users).then((result) => {
          res.json(result);
        });
      } else {
        // si el usuario existe envio msg al cliente
        res.send({ msg: "ya existe el usuario" });
      }
      if (err) console.log(err);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function existUser(req, res, next) {
  const { nickname } = req.query;

  try {
    User.exists({ nickname }).then((res) => console.log(res));
  } catch (error) {
    res.send(error.message);
  }
}

module.exports = {
  findAllUser,
  addUser,
  existUser,
};
