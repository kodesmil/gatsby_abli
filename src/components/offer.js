import React from "react"
import Fade from "react-reveal/Fade"
import { Box, Flex, Grid, Styled } from "theme-ui"
import { Svg } from "./svg"

export class Offer extends React.Component {
  render() {
    return (
      <Box sx={{
      }}>
        <Grid style={{}} gap="6em" columns={[1]}>
          {this.props.features.map(feature => (
            <Fade>
              <Box
                sx={{
                  mx: "auto",
                  width: ["80%", "60%", "50%", "35%"],
                }}
              >
                <Styled.h4
                  style={{
                    fontWeight: "900",
                  }}
                >
                  {feature.heading}
                </Styled.h4>
                <Grid
                  gap="3em"
                  columns={[1, 1, 2, 2]}
                  sx={{
                    maxWidth: "40em",
                    paddingTop: "1em",
                  }}
                >
                  <Styled.p style={{  }}>
                    {feature.description}
                  </Styled.p>
                  <Box
                    sx={{
                      width: ["12em", "12em", "14em", "14em"],
                      minWidth: ["12em", "12em", "14em", "14em"],
                      marginLeft: "auto",
                      paddingTop: ["0", "0", "6em", "8em"],
                    }}
                  >
                    <Svg logo={feature.logo}></Svg>
                  </Box>
                </Grid>
              </Box>
            </Fade>
          ))}
        </Grid>
      </Box>
    )
  }
}
