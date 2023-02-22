const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true},
  nickname: { type: String, required: true, unique: true },
  sub: {type: String, required: true },
  category: { type: String, required: true},
  picture: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String}
});

const User = model("user", userSchema);

module.exports = User;
