const mongoose = require('mongoose');

const eventsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    venue: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    rate: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Events = mongoose.model('Events', eventsSchema);
module.exports = Events;