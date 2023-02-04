import { Box, Typography } from "@mui/material";
import React from "react";

export default function BackEndView() {
  return (
    <Box display={"flex"} justifyContent={"flex-end"}>
      <Box>
        <Typography variant="h6" className="title">
          BACK END
        </Typography>{" "}
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Box textAlign={"end"}>
            <Typography variant="body1">Java</Typography>
            <Typography variant="body1">POO</Typography>
            <Typography variant="body1">SpringBoot</Typography>
            <Typography variant="body1">MongoDb</Typography>
            <Typography variant="body1">PostGress</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
