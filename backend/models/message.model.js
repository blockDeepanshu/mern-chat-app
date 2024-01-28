const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
    trim: true,
  },

  chat: {
    type: mongoose.Types.ObjectId,
    ref: "Chat",
  },
});

module.exports = mongoose.model("Message", MessageSchema);
