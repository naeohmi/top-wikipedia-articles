// https://testing-library.com/docs/example-react-intl/#configuring-react-intl-polyfills--locales
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { IntlProvider } from "react-intl";

const hasFullICU = () => {
  try {
    const january = new Date(9e8);
    const pt = new Intl.DateTimeFormat("ja", { month: "long" });
    return pt.format(january) === "janeiro";
  } catch (err) {
    return false;
  }
};

export const setupTests = () => {
  if (hasFullICU()) {
    Intl.NumberFormat.format = new Intl.NumberFormat("ja").format;
    Intl.DateTimeFormat.format = new Intl.DateTimeFormat("ja").format;
  } else {
    global.Intl = IntlPolyfill;
  }
};

function render(ui, { locale = "ja", ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return <IntlProvider locale={locale}>{children}</IntlProvider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
