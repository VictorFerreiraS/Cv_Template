import { Box, Typography } from '@mui/material'
import React from 'react'

export default function BackEndView() {
  return (
    <Box display={"flex"} justifyContent={"flex-end"} >
    <Box > 
    <Typography className="title">BACK END</Typography>{" "}
      <Typography>Java</Typography>
      <Typography>POO</Typography>
      <Typography>SpringBoot</Typography>
      <Typography>MongoDb</Typography>
      <Typography>PostGress</Typography>
    </Box>
  </Box>
  )
}
