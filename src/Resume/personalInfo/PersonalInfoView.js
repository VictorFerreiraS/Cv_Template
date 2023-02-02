import React from "react";

import { Box, Link, Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function PersonalInfoView() {
  return (
    <Box>
      <Typography className="titles">DADOS PESSOAIS</Typography>
      <Box>
        <PersonOutlineOutlinedIcon />
        <Typography>19 anos </Typography>
        <Typography>São João del Rei - MG </Typography>
      </Box>
      <Box>
        <PhoneAndroidOutlinedIcon />
        <Typography>(32) 99990-1005</Typography>
      </Box>{" "}
      <Box>
        <LinkedInIcon />
        <Typography>
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
        <Typography>
          <Link target={"blank"} href="https://github.com/VictorFerreiraS">
            VictorFerreiraS
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
