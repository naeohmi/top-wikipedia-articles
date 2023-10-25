import React from "react";
import { Box } from "@mui/material";
import Heading from "../components/Heading";
import GridDashboard from "../components/GridDashboard";
import PaginationOutlined from "../components/PaginationOutlined";

const FilterOptionsContainer = () => {
  return (
    <Box>
      <Heading />
      <GridDashboard />
      <PaginationOutlined />
    </Box>
  );
};

export default FilterOptionsContainer;
