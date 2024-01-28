const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,

    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    required: true,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
});

module.exports = mongoose.model("User", UserSchema);
