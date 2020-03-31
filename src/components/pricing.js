import React from "react";
import { Box, Styled } from "theme-ui";


export class FsPricing extends React.Component {
    render() {
      return (
        <Box
          sx={{
            marginTop: "5em",
            marginLeft: ["5%", "10%", "15%"],
            marginRight: ["5%", "10%", "15%"],
          }}
        >
          <Styled.h3
            style={{
              textAlign: "center",
            }}
          >
            How much does it cost?
          </Styled.h3>
          <Styled.p style={{ marginTop: "8px", textAlign: "center" }}>
            Only 3000 NOK/h for first 2 hours and 1000 NOK/h next ones
          </Styled.p>
        </Box>
      )
    }
  }