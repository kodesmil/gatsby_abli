import React from "react";
import { Box, Styled } from "theme-ui";


export class Footer extends React.Component {
    render() {
      return (
        <Box
          sx={{
            paddingTop: ["6em", "6em", "8em", "8em"],
            marginBottom: "1em",
            marginLeft: ["5%", "10%", "15%"],
            marginRight: ["5%", "10%", "15%"],
          }}
        >
          <footer>
            <Styled.p style={{ textAlign: "center" }}>
              Made with ♥ in Trondheim by{" "}
              <Styled.a href="https://kodesmil.com">KodeSmil</Styled.a>
            </Styled.p>
          </footer>
        </Box>
      )
    }
  }