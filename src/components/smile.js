import React from "react"
import { Box, Styled } from "theme-ui"

export class Smile extends React.Component {
  render() {
    return (
      <Box
        sx={{
          paddingTop: ["4em", "4em"],
          width: ["80%", "60%", "40%", "30%"],
          mx: "auto",
        }}
      >
        <Styled.h1 style={{ textAlign: "center" }}> 🥳</Styled.h1>
        <Styled.p style={{ marginTop: "16px", textAlign: "center" }}>
          Abli is changing the delivery model of healthcare using an AI-enabled
          platform where practitioners can personalise care, using data from
          widely adopted smartphones and smartwatches.
        </Styled.p>
      </Box>
    )
  }
}
