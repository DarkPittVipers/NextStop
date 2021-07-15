import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { DateRangePicker, AdapterDateFns, LocalizationProvider } from '@material-ui/lab/';
import Box from '@material-ui/core/Box';

export default function DateRange() {
  const [value, setValue] = useState([null, null]);

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </LocalizationProvider>
    </>
  );
}
