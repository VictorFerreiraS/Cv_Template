import { Box, Link, Typography } from "@mui/material";
import React from "react";

export default function ProjectsView() {
  return (
    <Box display={"flex"} justifyContent="flex-end">
      <Box>
        <Box display={"flex"} justifyContent="flex-end">
          <Typography className="title"> PROJETOS</Typography>
        </Box>
        <Typography display={"flex"} justifyContent="flex-end">
          <Link href="https://github.com/VictorFerreiraS/magic-memory">
            Memory Game
          </Link>
        </Typography >
        <Typography display={"flex"} justifyContent="flex-end">
          <Link href="https://github.com/VictorFerreiraS/MagicMemories-Api">
            Memory Game Api
          </Link>
        </Typography>
        <Typography display={"flex"} justifyContent="flex-end">
          <Link href="https://github.com/VictorFerreiraS/apple-clone">
            Former Apple Landing Page
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
