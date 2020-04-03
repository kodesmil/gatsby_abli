import React from "react"
import { Flex, Box, Styled } from "theme-ui"
import { Svg } from "./svg";

export class Header extends React.Component {
  render() {
    return (
      <Flex
        sx={{
          position: "relative",
          paddingTop: ["7em", "4em", "4em", "4em"],
          minHeight: "100vh",
        }}
        as="section"
      >
        <Box
          sx={{
            my: "auto",
            mx: "auto",
            width: ["85%", "80%", "80%", "60%"],
          }}
        >
          <Styled.h1
            style={{
              color: "black",
              lineHeight: 0.95,
            }}
          >
            {this.props.header.heading}
          </Styled.h1>
          <Box
            sx={{
              marginTop: ["2em", "2em", "2em", "3em"],
            }}
          >
            <Styled.h3
              style={{
                color: "black",
              }}
            >
              {this.props.header.description}
            </Styled.h3>
          </Box>
          <Box
            sx={{
              height: ["16em", "17em", "18em", "20em"],
              width: ["16em", "17em", "18em", "20em"],
              minWidth: ["16em", "17em", "18em", "20em"],
              marginTop: ["1em", "1em", "1em", "1em"],
              marginLeft: "auto",
            }}
          >
            <Svg logo={this.props.header.logo} />
          </Box>
        </Box>
      </Flex>
    )
  }
}
