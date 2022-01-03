const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, // ensure has one username
  password: { type: String, required: true },
});
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
