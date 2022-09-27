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
  const user = req.body;
  const { nickname } = user;
  try {
    User.exists({ nickname }, function (err, doc) {
      // si el usuario no existe creo el usuario
      if (doc === null) {
        User.create(user).then((user) => {
          res.json(user);
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
    User.exists({ nickname }, function (err, doc) {
      // si no existe el documento es null -> false
      const exist = doc === null ? false : true;

      if (err) console.log(err);
      res.send(exist);
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
