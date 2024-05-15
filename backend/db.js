const { mongoose } = require("mongoose");

mongoose.connect("mongodb://localhost:27017/paytm");

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLenght: 30,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    trim: true,
    required: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
