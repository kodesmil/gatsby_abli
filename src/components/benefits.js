import React from "react";
import Fade from "react-reveal/Fade";
import { Box, Flex, Grid, Styled } from "theme-ui";


export class Benefits extends React.Component {
  render() {
    return (
      <Box
        sx={{
          boxShadow: "0px 0.5px 50px rgba(0,0,0,0.05)",
        }}
      >
        <Grid style={{}} gap="2em" columns={[1]}>
          {this.props.features.map(feature => (
            <Fade>
              <Box
                sx={{
                  background: "white",
                  py: ["2em", "3em", "4em", "5em"],
                  boxShadow: "0px 0.5px 50px rgba(0,0,0,0.04)",
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
                    width: ["90%", "75%", "75%", "45%"],
                    maxWidth: "40em",
                    marginTop: "1em",
                  }}
                >
                  {renderLogo(feature.logo)}
                  <Box
                    sx={{
                      alignItems: "center",
                    }}
                  >
                    <Styled.p
                      style={{
                        marginTop: "1em",
                      }}
                    >
                      {feature.description}
                    </Styled.p>
                  </Box>
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
