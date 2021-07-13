import React, { useContext } from 'react';
import { RangeDatePicker } from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';

export default function DatePicker() {
  // const onDateChange = (startDate, endDate) => {
  //   date.startDate = startDate;
  //   date.endDate = endDate;
  //   console.log(date);
  // };

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
