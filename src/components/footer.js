import React from "react";
import { Box, Styled } from "theme-ui";


export class Footer extends React.Component {
    render() {
      return (
        <Box
          sx={{
            marginTop: "7em",
            marginBottom: "1em",
            marginLeft: ["5%", "10%", "15%"],
            marginRight: ["5%", "10%", "15%"],
          }}
        >
          <footer>
            <Styled.p style={{ marginTop: "8px", textAlign: "center" }}>
              Made with ♥ in Trondheim by{" "}
              <Styled.a href="https://kodesmil.com">KodeSmil</Styled.a>
            </Styled.p>
          </footer>
        </Box>
      )
    }
  }