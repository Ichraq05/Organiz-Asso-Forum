const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  title: {type: String, default: ''},   // titre pour une nouvzlle siqcuqqion
  content:{type: String, required: true },
  replyTo: {type: mongoose.Schema.Types.ObjectId, ref: 'Message', default: null},
  forum: {type: String, enum: ['ouvert','ferme'], required: true},
  timestamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Message', messageSchema);
