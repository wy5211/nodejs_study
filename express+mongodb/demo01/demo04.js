const userModel = require('./model/Schema/user');

userModel.find((err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
