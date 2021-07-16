import React, { useContext } from 'react';
import { RangeDatePicker, SingleDatePicker } from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';

export default function FlightDatePicker({ setDate, roundTrip }) {
  const onDateChange = (startDate, endDate) => {
    const start = formatDate(startDate);
    const end = formatDate(endDate);
    const dates = {
      starting: start,
      ending: end,
    };
    setDate(dates);
  };
  function formatDate(date) {
    const d = new Date(date);
    let month = `${d.getMonth() + 1}`;
    let day = `${d.getDate()}`;
    const year = d.getFullYear();

    if (month.length < 2) {
      month = `0${month}`;
    }
    if (day.length < 2) {
      day = `0${day}`;
    }
    return [year, month, day].join('-');
  }

  return (
    roundTrip === true ? (
      <RangeDatePicker
        startDate={new Date()}
        endDate={new Date()}
        onChange={(startDate, endDate) => onDateChange(startDate, endDate)}
      />
    )
      : (
        <SingleDatePicker
          startDate={new Date()}
          onChange={(startDate, endDate) => onDateChange(startDate, endDate)}
        />
      )
  );
}
