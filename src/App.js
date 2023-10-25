import React from "react";
import "./App.css";
import Container from "@mui/material/Container";
import FilterOptionsContainer from "./containers/FilterOptionsContainer";
import LocaleSwitcher from "./components/LocaleSwitcher";

const App = (props) => {
  return (
    <Container fixed className="App">
      <LocaleSwitcher props={props} />
      <FilterOptionsContainer />
    </Container>
  );
};

export default App;
