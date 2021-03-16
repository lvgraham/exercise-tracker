const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//fields that you need for each category
const exerciseSchema = new Schema ({
  username: { type: String, required: true },
  description: { type: String, required: true}, 
  duration: {type: Number, required: true}, 
  date: {type: Date, required: true}, 
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;