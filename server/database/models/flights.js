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
    fees: [
      {
        amount: String,
        type: String,
      },
    ],
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
