const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userId:   { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  questId:  { type: String, required: true },
  author:   { type: String, required: true },
  text:     { type: String, required: true },
  imageUrl: { type: String, default: null }
}, { timestamps: true });

module.exports = mongoose.model('Comment', schema);
