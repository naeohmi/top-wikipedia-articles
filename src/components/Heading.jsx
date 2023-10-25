import React from "react";
import Typography from "@mui/material/Typography";
import { FormattedMessage } from "react-intl";

const Heading = () => {
  return (
    <Typography variant="h4" className="align-center-with-padding">
      <FormattedMessage
        id="heading.text"
        description="Primary header to describe page contents"
        defaultMessage="Top Wikipedia Articles"
      />
    </Typography>
  );
};

export default Heading;
