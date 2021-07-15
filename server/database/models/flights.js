const mongoose = require('mongoose');

const FlightSchema = mongoose.Schema({
  userId: String,
  type: String,
  id: String,
  source: String,
  instantTicketingRequired: Boolean,
  nonHomogeneous: Boolean,
  oneWay: Boolean,
  lastTicketingDate: Date,
  numberOfBookableSeats: Number,
  itineraries: [
    {
      duration: String,
      segments: [
        {
          departure: {
            iataCode: String,
            terminal: String,
            at: Date,
          },
          arrival: {
            iataCode: String,
            terminal: String,
            at: Date,
          },
          carrierCode: String,
          number: String,
          aircraft: {
            code: String,
          },
          operating: {
            carrierCode: String,
          },
          duration: String,
          id: String,
          numberOfStops: Number,
          blacklistedInEU: Boolean,
        },
      ],
    },
  ],
  price: {
    currency: String,
    total: String,
    base: String,
<<<<<<< HEAD
    fees: [
      {
        amount: String,
        type: { type: String },
      },
    ],
=======
    fees: [{
      amount: String,
      type: { type: String },
    }],
>>>>>>> e665a756f885a6eb1880d8459f20db7f9339c81b
    grandTotal: String,
  },
  pricingOptions: {
    fareType: [String],
    includedCheckedBagsOnly: Boolean,
  },
  validatingAirlineCodes: [String],
  travelerPricings: [
    {
      travelerId: String,
      fareOption: String,
      travelerType: String,
      price: {
        currency: String,
        total: String,
        base: String,
      },
      fareDetailsBySegment: [
        {
          segmentId: String,
          cabin: String,
          fareBasis: String,
          class: String,
          includedCheckedBags: {
            quantity: Number,
          },
        },
      ],
    },
  ],
});

const Flight = mongoose.model('flight', FlightSchema);

module.exports = Flight;
