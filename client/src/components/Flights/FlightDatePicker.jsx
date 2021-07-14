import React, { useContext } from 'react';
import { RangeDatePicker } from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';

export default function FlightDatePicker({ setDate }) {
  const onDateChange = (startDate, endDate) => {
    let start = formatDate(startDate);
    let end = formatDate(endDate);
    setDate(start, end);
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
    // minDate={new Date(1900, 0, 1)}
    // maxDate={new Date(2100, 0, 1)}
    // dateFormat="D"
    // monthFormat="MMM YYYY"
    // startDatePlaceholder="Start Date"
    // endDatePlaceholder="End Date"
    // disabled={false}
    // className="my-own-class-name"
    // startWeekDay="monday"
    />
  );
}
