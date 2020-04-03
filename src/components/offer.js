import React from "react";
import Fade from "react-reveal/Fade";
import { Box, Flex, Grid, Styled } from "theme-ui";
import { Svg } from "./svg";


export class Offer extends React.Component {
  render() {
    return (
      <Box
        sx={{
        }}
      >
        <Grid style={{}} gap="2em" columns={[1]}>
          {this.props.features.map(feature => (
            <Fade>
              <Box
                sx={{
                  py: ["2em", "2em", "3em", "3em"],
                }}
              >
                <Styled.h3
                  style={{
                    fontWeight: "900",
                    textAlign: "center",
                  }}
                >
                  {feature.heading}
                </Styled.h3>
                <Flex
                  sx={{
                    mx: "auto",
                    width: ["80%", "75%", "75%", "45%"],
                    maxWidth: "40em",
                    marginTop: ["1em", "2em"],
                  }}
                >
                  {renderLogo(feature.logo)}
                  <Styled.p style={{marginTop: "1em", textAlign: "justify"}}>{feature.description}</Styled.p>
                </Flex>
              </Box>
            </Fade>
          ))}
        </Grid>
      </Box>
    )
  }
}

function renderLogo(logo) {
  const style = {
    height: ["7em", "12em", "14em", "14em"],
    width: ["7em", "12em", "14em", "14em"],
    minWidth: ["7em", "12em", "14em", "14em"],
    marginRight: ["2em", "2em", "3em", "3em"],
  }
  return (
    <Box sx={style}>
      <Svg logo={logo}></Svg>
    </Box>
  )
}
