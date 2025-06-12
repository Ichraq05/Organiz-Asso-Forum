const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  login:{type: String, required: true, unique: true },
  password: {type: String, required: true },
  firstname: String,
  lastname: String,
  member: {type: Boolean, default: false},
  admin: {type: Boolean, default: false},
  profilePhoto: {type: String, default: ''},
  coverPhoto: {type: String, default: ''},
  friends:[{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  friendRequests: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('User', userSchema);
