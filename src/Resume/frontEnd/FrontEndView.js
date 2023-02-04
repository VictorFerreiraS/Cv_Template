import { Box, Typography } from "@mui/material";
import React from "react";

export default function FrontEndView() {
  return (
    <Box>
      <Typography variant="h6" className="title">
        FRONT END
      </Typography>
      <Box>
        <Typography variant="body1">React</Typography>
        <Typography variant="body1">CSS / Sass / Material Ui</Typography>
      </Box>
    </Box>
  );
}
