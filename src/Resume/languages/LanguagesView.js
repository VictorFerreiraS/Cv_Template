import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguagesView() {
  const {t} = useTranslation()
  return (
    <Box>
      <Typography variant="h6" className="titles">
        {t("idiomas")}
      </Typography>
      <Typography variant="body1">{t("ingles")} </Typography>
      <Typography variant="body1">{t("falAvc")}</Typography>
      <Typography variant="body1">{t("leiEsc")}</Typography>
      <Typography variant="body1">{t("comFlu")}</Typography>
    </Box>
  );
}
