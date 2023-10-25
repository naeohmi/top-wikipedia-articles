import React from "react";
import { Typography, Box } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CustomDatePicker = ({ dateValue, setDateValue, maxDate }) => {
  return (
    <Box>
      <Typography>
        <FormattedMessage
          id="customDatePicker.subHeading"
          description="Sub header for user filtered date picker"
          defaultMessage="Date"
        />
      </Typography>
      <DatePicker
        value={dateValue}
        disableFuture
        maxDate={maxDate}
        onChange={(newDateValue) => setDateValue(newDateValue)}
      />
    </Box>
  );
};

export default CustomDatePicker;
