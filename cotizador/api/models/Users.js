const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, require: true, unique: true },
  secondName: { type: String },
  sub: {type: String, require: true },
  category: { type: String, require: true },
  picture: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: String, require: true}
});

const User = model("user", userSchema);

module.exports = User;
