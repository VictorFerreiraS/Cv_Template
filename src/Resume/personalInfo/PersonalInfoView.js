import React from "react";

import { Box, Link, Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function PersonalInfoView() {
  return (
    <Box>
      <Typography variant="h6">
        DADOS PESSOAIS
      </Typography>
      <Box>
        <PersonOutlineOutlinedIcon />
        <Typography variant="body1">19 anos </Typography>
        <Typography variant="body1">São João del Rei - MG </Typography>
      </Box>
      <Box>
        <PhoneAndroidOutlinedIcon />
        <Typography variant="body1">(32) 99990-1005</Typography>
      </Box>{" "}
      <Box>
        <LinkedInIcon />
        <Typography variant="body1">
          <Link
            target={"blank"}
            href="https://www.linkedin.com/in/victor-fagundes-ferreira/"
          >
            Victor Ferreira
          </Link>
        </Typography>
      </Box>
      <Box>
        <GitHubIcon />
        <Typography variant="body1">
          <Link target={"blank"} href="https://github.com/VictorFerreiraS">
            VictorFerreiraS
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
