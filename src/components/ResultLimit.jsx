import React from "react";
import { Box, MenuItem, FormControl, Select, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

const NUMBER_OF_RESULTS_LIMIT = [25, 50, 75, 100, 200];

const ResultLimit = ({ resultsLimit, setResultsLimit }) => {
  return (
    <Box>
      <FormControl>
        <Typography id="result-limit-label">
          <FormattedMessage
            id="resultLimit.numResults"
            description="Sub header for user filter options"
            defaultMessage="Num Results" />
        </Typography>
        <Select
          labelId="result-limit-label"
          id="result-limit-select"
          value={resultsLimit}
          onChange={(newResultLimit) =>
            setResultsLimit(newResultLimit.target.value)
          }>
          {NUMBER_OF_RESULTS_LIMIT.map((limit) => (
            <MenuItem key={limit} value={limit}>
              {limit}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ResultLimit;
