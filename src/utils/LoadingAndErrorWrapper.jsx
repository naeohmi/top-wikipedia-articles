import React from "react";
import { FormattedMessage } from "react-intl";
import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingAndErrorWrapper = ({ children, isLoading, isError }) => {
  if (isLoading && !isError) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  if ((isError && !isLoading) || (!isError && !isLoading)) {
    return (
      <>
        <Typography>
          <FormattedMessage
            id="errorMessage.text"
            description="General error message to display to user"
            defaultMessage="Sorry an error occured"
          />
        </Typography>
      </>
    );
  }

  return children;
};

export default LoadingAndErrorWrapper;
