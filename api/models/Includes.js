const { Schema } = require("mongoose");

const includeSchema = new Schema({
  food: { type: String, required: true },
  route: { type: String, required: true },
  visit: { type: String, required: true },
  transport: { type: String, required: true },
});

module.exports = includeSchema;
