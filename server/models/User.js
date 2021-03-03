const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "Please input username."],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please input email."],
      match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    password: {
      type: String,
      required: [true, "Please input password."],
    },
    resetPwdHash: {
      type: String,
    },
    resetPwdExpiration: {
      type: Date,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    friends: [
      {
        ref: "User",
      },
    ],
    profileId: {
      type: String
    },
    status: {
      type: String,
      default: "deactivated",
      enum: ["activated", "deactivated"],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("User", UserSchema)
