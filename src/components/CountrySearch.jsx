import React from "react";
import { Box, MenuItem, FormControl, Select, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

const countryNameMapping = {
  CA: "Canada",
  FR: "France",
  JP: "Japan",
  KR: "South Korea",
  MA: "Morocco",
  MX: "Mexico",
  NZ: "New Zealand",
  US: "United States",
};

const CountrySearch = ({ countrySearchValue, setCountrySearchValue }) => {
  return (
    <Box>
      <FormControl>
        <Typography id="result-limit-label">
          <FormattedMessage
            id="countrySearch.country"
            description="Sub header for user filter options"
            defaultMessage="Country"
          />
        </Typography>
        <Select
          labelId="country-search-label"
          id="country-search-select"
          value={countrySearchValue}
          onChange={(newResultLimit) =>
            setCountrySearchValue(newResultLimit.target.value)
          }
        >
          {Object.keys(countryNameMapping).map(
            (countryName) => (
              <MenuItem key={countryName} value={countryName}>
                {countryNameMapping[countryName]}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CountrySearch;
