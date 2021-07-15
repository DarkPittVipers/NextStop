const mongoose = require('mongoose');

const HotelSchema = mongoose.Schema({
  userId: String,
  type: String,
  hotel: {
    type: String,
    hotelId: String,
    chainCode: String,
    dupeId: String,
    name: String,
    rating: String,
    cityCode: String,
    latitude: Number,
    longitude: Number,
    hotelDistance: {
      distance: Number,
      distanceUnit: String,
    },
    address: {
      lines: [String],
      postalCode: String,
      cityName: String,
      countryCode: String,
    },
    contact: {
      phone: String,
      fax: String,
      email: String,
    },
    description: {
      lang: String,
      text: String,
    },
    amenities: [String],
    media: [
      {
        uri: String,
        category: String,
      },
    ],
  },
  available: Boolean,
  offers: [
    {
      id: String,
      checkInDate: Date,
      checkOutDate: Date,
      rateCode: String,
      room: {
        type: String,
        typeEstimated: {
          category: String,
          beds: Number,
          bedType: String,
        },
        description: {
          text: String,
        },
      },
      guests: {
        adults: Number,
      },
      price: {
        currency: String,
        total: String,
        variations: {
          average: {
            total: String,
          },
          changes: [
            {
              startDate: Date,
              endDate: Date,
              total: String,
            },
          ],
        },
      },
      policies: {
        guarantee: {
          acceptedPayments: {
            creditCards: [String],
            methods: [String],
          },
        },
        paymentType: String,
        cancellation: {
          deadline: Date,
        },
      },
      self: String,
    },
  ],
  self: String,
});

const Hotel = mongoose.model('hotel', HotelSchema);

module.exports = Hotel;
