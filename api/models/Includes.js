const { Schema } = require("mongoose");

const includeSchema = new Schema({
  food: { type: String },
  route: { type: String },
  visit: { type: String },
  transport: { type: String },
});

module.exports = includeSchema;
