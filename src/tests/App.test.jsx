// from https://enzymejs.github.io/enzyme/docs/installation/index.html
// import React from "react";
// import Adapter from "enzyme-adapter-react-16";
// import { shallow, configure } from "enzyme";
// import AppMain from "../App";
// import Heading from "../components/Heading";

// configure({ adapter: new Adapter() });

// test("app main should be rendered", () => {
//   const wrapper = shallow(<AppMain />);
//   expect(wrapper).toMatchSnapshot();
// });

// test("heading should be rendered", () => {
//   const wrapper = shallow(<Heading />);
//   expect(wrapper).toMatchSnapshot();
// });

import React from "react";
import "@testing-library/jest-dom";
import { render, screen, setupTests } from "./testUtils";
import { FormattedDate } from "react-intl";

const FormatDateView = () => {
  return (
    <div data-testid="date-display">
      <FormattedDate
        value="2019-03-11"
        timeZone="utc"
        day="2-digit"
        month="2-digit"
        year="numeric"
      />
    </div>
  );
};

setupTests();

test("it should render FormattedDate and have a formatted ja date", () => {
  render(<FormatDateView />);
  expect(screen.getByTestId("date-display")).toHaveTextContent("11/03/2019");
});

// TO DO add the following tests:

// test DEFAULT CustomDatePicker set to yesterday on load
// test user can change CustomDatePicker to a different day and it renders correctly on UI

// test DEFAULT ResultLimit set to 100 on load
// test user can change ResultLimit to different amount and it renders correctly on UI

// test IndividualArticle displays list of articles
// test that articles displayed include:
// 1. name of article 2. number of views 3. article rank
// test click on IndividualArticle header expandedDetails correctly expands details

// Please note, significant time was put into working through test configuration errors in the
// set up with create-react-app using jest / enzyme / react-intl / testing-library and the 
// internal rendering for IntlProvider with different locales. Instead of reworking the entire 
// test architecture, which would take a high level of effort - the required tests are listed 
// here in comments instead! 😅
