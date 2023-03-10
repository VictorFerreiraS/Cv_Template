import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function ProjectsView() {
  const { t } = useTranslation();
  return (
    <Box display={"flex"} justifyContent="flex-end">
      <Box>
        <Box display={"flex"} justifyContent="flex-end">
          <Typography variant="h6" className="title">
            {t("projetos")}
          </Typography>
        </Box>
        <Typography variant="body1" display={"flex"} justifyContent="flex-end">
          <Link href="https://github.com/VictorFerreiraS/magic-memory">
            Memory Game
          </Link>
        </Typography>
        <Typography variant="body1" display={"flex"} justifyContent="flex-end">
          <Link href="https://github.com/VictorFerreiraS/MagicMemories-Api">
            Memory Game Api
          </Link>
        </Typography>
        <Typography variant="body1" display={"flex"} justifyContent="flex-end">
          <Link href="https://github.com/VictorFerreiraS/apple-clone">
            Former Apple Landing Page
          </Link>
        </Typography>
        <Typography variant="body1" display={"flex"} justifyContent="flex-end">
          <Link href="https://github.com/VictorFerreiraS/Resume">Resume</Link>
        </Typography>
      </Box>
    </Box>
  );
}
