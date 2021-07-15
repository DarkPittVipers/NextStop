import React, { useContext } from 'react';
import { RangeDatePicker } from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';

export default function FlightDatePicker({ setDate }) {
  const onDateChange = (startDate, endDate) => {
    let start = formatDate(startDate);
    let end = formatDate(endDate);
    const dates = {
      starting: start,
      ending: end,
    };
    setDate(dates);
  };
  function formatDate(date) {
    let d = new Date(date);
    let month = '' + (d.getMonth() + 1)
    let day = '' + d.getDate()
    let year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return [year, month, day].join('-');
  }

  return (
    <RangeDatePicker
      startDate={new Date()}
      endDate={new Date()}
      onChange={(startDate, endDate) => onDateChange(startDate, endDate)}
    />
  );
}
