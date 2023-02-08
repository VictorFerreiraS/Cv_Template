import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function CertificatesView() {
  const {t} = useTranslation()

  return (
    <Box marginTop={"10px"} >
      <Typography variant="h6"> {t("certificados")} </Typography>
      <Typography variant="body1">Linkedin: 4</Typography>
      <Typography variant="body1"> {t("destaques")} React, Java, {t("poo")}</Typography>
    </Box>
  );
}
