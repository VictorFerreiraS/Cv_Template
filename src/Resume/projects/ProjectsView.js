import { Box, Link, Typography } from '@mui/material'
import React from 'react'

export default function ProjectsView() {
  return (
    <Box>
    <Typography className="title"> PROJETOS</Typography>
    <Typography>
      Memory Game:{" "}
      <Link>https://github.com/VictorFerreiraS/magic-memory</Link>
    </Typography>
    <Typography>
      Memory Game Api:{" "}
      <Link>
        https://github.com/VictorFerreiraS/MagicMemories-Api
      </Link>
    </Typography>
    <Typography>
      Former Apple Landing Page{" "}
      <Link>https://github.com/VictorFerreiraS/apple-clone</Link>
    </Typography>
    </Box>
  )
}
