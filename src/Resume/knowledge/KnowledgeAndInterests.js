import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function KnowledgeAndInterests() {
  const {t} = useTranslation()
  return (
    <Box
      paddingTop={"10px"}
    >
      <Box>
        <Typography variant="h6"> {t("conInt")} </Typography>
        <Typography variant="body1">
            Git, Docker, NextJS, Typescript, Angular, Vue, Python, Node,  Firebase, i18n.
        </Typography>
      </Box>
    </Box>
  );
}

