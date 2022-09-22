const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, require: true},
  nickname: { type: String, require: true, unique: true },
  sub: {type: String, require: true },
  category: { type: String, require: true},
  picture: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: String}
});

const User = model("user", userSchema);

module.exports = User;
