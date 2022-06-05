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
  res.send("Todo ok")
}

function addUser(req, res, next) {
  const user = req.body;

  try {
    User.create(user).then((user) => {
      console.log(user);
      res.json(user);
    });
  } catch (error) {
    res.send(error.message);
  }
}

function existUser(req, res, next) {
  const { sub } = req.query;

  try {
    User.exists({sub},function (err, doc) {
      const response = doc ? true : false ;
      if (err){
          console.log(err)
      }else{
          res.status(200).send(response)
      }
  });
    
  } catch (error) {
    res.send(error.message);
  }
}
module.exports = {
  findAllUser,
  addUser,
  existUser
};
