const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/eggcms", { useNewUrlParser: true });

const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  status: {
    // 设定默认值
    type: Number,
    default: 1,
  },
});

const userModel = mongoose.model("User", UserSchema, "users");

const addmodel = new userModel({
  name: "王五222",
  age: 18,
  // status: 1,
});

addmodel.save((err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
