import React from "react"
import { Flex, Box, Styled } from "theme-ui"
import Woman from "../../content/assets/svg/Woman.svg"

export class FsHeader extends React.Component {
  render() {
    return (
      <Flex
        sx={{
          position: "relative",
          minHeight: "100vh",
        }}
        as="section"
      >
        <Box
          sx={{
            my: "auto",
            mx: "auto",
            width: ["90%", "80%", "80%", "60%"],
          }}
        >
          <Styled.h1
            style={{
              color: "black",
              lineHeight: 0.95,
              marginTop: "1em",
              textAlign: "center",
            }}
          >
            AI-based{" "}
            <span
              style={{
                background:
                  "linear-gradient(54.4deg, #31B1E7 10.45%, #268CF5 50%, #2F58F7 89.55%)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
              }}
            >
              healthcare
            </span> platform
            
          </Styled.h1>
          <Box
            sx={{
              marginTop: ["1.5em", "2em", "2em", "2em"],
            }}
          >
            <Styled.h3
              style={{
                color: "black",
                textAlign: "center",
              }}
            >
              We are transforming the lives of people with behavioural health
              and chronic diseases through data-driven medicine.
            </Styled.h3>
          </Box>
          <Box
            sx={{
              height: ["9em", "11em", "13em", "16em"],
              width: ["9em", "11em", "13em", "16em"],
              minWidth: ["9em", "11em", "13em", "16em"],
              marginTop: ["1.5em", "2em", "2em", "2em"],
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Woman
              style={{
                height: "inherit",
                width: "inherit",
              }}
            ></Woman>
          </Box>
        </Box>
      </Flex>
    )
  }
}
