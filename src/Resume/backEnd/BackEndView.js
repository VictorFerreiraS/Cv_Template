import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function BackEndView() {
  const {t} = useTranslation()

  return (
    <Box display={"flex"} justifyContent={"flex-end"}>
      <Box>
        <Typography variant="h6" className="title">
          BACK END
        </Typography>{" "}
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Box textAlign={"end"}>
            <Typography variant="body1">Java</Typography>
            <Typography variant="body1">{t("poo")}</Typography>
            <Typography variant="body1">SpringBoot</Typography>
            <Typography variant="body1">MongoDb</Typography>
            <Typography variant="body1">PostGress</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
