var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// Defining a schema for Business
var restSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  alias: { type: String, required: true },
  image_url: { type: String, required: true },
  url: String,
  phone: String,
  display_phone: String,
  location: Object,
  photos: [String],
  price: String,
  hours: [{
    open: [
      {
        is_overnight: Boolean,
        start: String,
        end: String,
        day: Number,
      },
    ],
  }],
  rating: Number,
  transactions: [String],
  categories: [{
    alias: { type: String, required: true },
    title: { type: String, required: true },
  }],
  // could also build a validator to forbid any entries where
  // "is_closed": true
});

const rest = mongoose.model('Restaurant', restSchema);

module.export = rest;
