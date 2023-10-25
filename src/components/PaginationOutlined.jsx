import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationOutlined = () => {
  //TO DO - connect to Articles
  return (
    <Stack spacing={2} className="align-center-with-padding">
      <Pagination count={10} variant="outlined" color="primary" />
    </Stack>
  );
};

export default PaginationOutlined;
