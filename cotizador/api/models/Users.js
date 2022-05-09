const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, require: true, unique: true },
  category: { type: String, require: true, unique: true },
  picture: { type: String, require: true },
  email: { type: String, require: true }
});

const User = model("user", userSchema);

module.exports = User;