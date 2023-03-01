const mongoose = require('mongoose')

const SplitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
  },
  date: {
    type: Date,
    required: [true, 'must provide date'],
  },
  items: {
    type: Array,
    required: [true, 'must provide items'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Split', SplitSchema)
