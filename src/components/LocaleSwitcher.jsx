import React, { useContext } from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { FormattedMessage, FormattedDate } from "react-intl";
import { Context } from "../utils/IntlProviderContext";

const localeMapping = {
  en: "English",
  fr: "French",
  ar: "Arabic",
  ja: "Japanese",
};

const LocaleSwitcher = (props) => {
  const IntlProviderContext = useContext(Context);

  return (
    <Box>
      <FormControl>
        <InputLabel id="locale-switcher-label">
          <FormattedMessage
            id="localeSwitcher.inputLabel"
            description="Dropdown menu heading to describe locales"
            defaultMessage="Locale"
          />
        </InputLabel>
        <Select
          labelId="locale-switcher-label"
          id="locale-switcher-select"
          value={IntlProviderContext.locale}
          label="Locale"
          onChange={IntlProviderContext.selectLanguage}
        >
          {["en", "fr", "ja", "ar"].map((locale) => (
            <MenuItem key={locale} value={locale}>
              {localeMapping[locale]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <p>
        <FormattedMessage
          id="localeSwitcher.dateForToday"
          description="Sub heading to display today's date"
          defaultMessage="Today is: "
        />
        <FormattedDate
          value={props.date}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </p>
    </Box>
  );
};

export default LocaleSwitcher;
