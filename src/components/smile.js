import React from "react"
import { Box, Styled } from "theme-ui"

export class Smile extends React.Component {
  render() {
    return (
      <Box
        sx={{
          paddingTop: ["6em", "6em", "8em", "8em"],
          width: ["80%", "60%", "50%", "35%"],
          mx: "auto",
        }}
      >
        <Styled.p style={{ }}>
          Abli is changing the delivery model of healthcare using an AI-enabled
          platform where practitioners can personalise care, using data from
          widely adopted smartphones and smartwatches.
        </Styled.p>
        <Styled.h1 style={{ textAlign: "center", marginTop: "1em", }}> 🥳</Styled.h1>
      </Box>
    )
  }
}
