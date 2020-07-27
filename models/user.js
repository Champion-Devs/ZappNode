const mongoose = require("mongoose");
const { Monitor } = require("./monitor");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "User must have a Username"],
  },
  password: {
    type: String,
    required: [true, "User must have a Password"],
  },
  passwordConfirm: {
    type: String,
    required: [true, "please confirm your password"],
    validate: {
      //WORK ONLY WITH CREATE() and SAVE() , so we have to use save on update and and not findByIdAndUpdate()
      validator: function (passConfirm) {
        return passConfirm === this.password; // true ? no error message
      },
      message: "Passwords should be the same",
    },
  },
  googleID: String,
  facebookID: String,
  role: {
    type: String,
    enum: ["admin", "superAdmin", "user"],
  },
  plan: {
    type: Boolean,
    default: "false",
  },
  userCount: Number,
  monitors: [Monitor.schema],
});

User.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
});

module.exports = mongoose.model("User", User);
