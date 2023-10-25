import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import EnglishTranslations from "../translations/en-us.json";
import FrenchTranslations from "../translations/fr-fr.json";
import ArabicTranslations from "../translations/ar-ar.json";
import JapaneseTranslations from "../translations/ja-jp.json";

export const Context = React.createContext();

const IntlProviderContext = (props) => {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState(EnglishTranslations);

  const localeMapping = {
    en: EnglishTranslations,
    fr: FrenchTranslations,
    ar: ArabicTranslations,
    ja: JapaneseTranslations,
  };

  const selectLanguage = (event) => {
    if (event.target.value) {
      const newLocale = event.target.value;
      setLocale(newLocale);
      setMessages(localeMapping[newLocale]);
    }
  };

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {props.children}
        </LocalizationProvider>
      </IntlProvider>
    </Context.Provider>
  );
};

export default IntlProviderContext;
