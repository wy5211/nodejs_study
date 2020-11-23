const mongoose = require("../db");

const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  status: {
    // 设定默认值
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("User", UserSchema, "users");
