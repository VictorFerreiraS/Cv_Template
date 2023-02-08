import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function DegreesView() {
  const {t} = useTranslation()
  return (
    <Box>
      <Typography variant="h6" className="titles">
       {t("forExp")}
      </Typography>
      <Typography variant="body1"> {t("curCie")} </Typography>
      <Typography variant="body1"> {t("desFac")} </Typography>
      <Typography paddingTop={'20px'} variant="body1"> {t("estPro")} </Typography>
      <Typography variant="body1">{t("focFro")}</Typography>
    </Box>
  );
}
