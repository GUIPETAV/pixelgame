const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userId:  { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  questId: { type: String, required: true },
  done:    { type: Boolean, default: false },
  checks:  { type: Map, of: Boolean, default: {} }
}, { timestamps: true });

schema.index({ userId: 1, questId: 1 }, { unique: true });

module.exports = mongoose.model('Progress', schema);
