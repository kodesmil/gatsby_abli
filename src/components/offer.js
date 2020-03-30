import React, { Children } from "react"
import { Link, graphql } from "gatsby"
import Fade from "react-reveal/Fade"

import SEO from "../components/seo"
import {
  NavLink,
  Flex,
  Box,
  Button,
  Grid,
  Styled,
  Label,
  Input,
} from "theme-ui"
import Img from "gatsby-image"
import Moments from "../../content/assets/svg/Moments.svg"
import Witch from "../../content/assets/svg/Witch.svg"
import WholeYear from "../../content/assets/svg/WholeYear.svg"
import FitnessTracker from "../../content/assets/svg/FitnessTracker.svg"
import MedicalResearch from "../../content/assets/svg/MedicalResearch.svg"
import SourceCode from "../../content/assets/svg/SourceCode.svg"

export class FsOffer extends React.Component {
  render() {
    return (
      <Box
        sx={{
          boxShadow: "0px 0.5px 50px rgba(0,0,0,0.05)",
        }}
      >
        <Grid style={{
        }} gap="2em" columns={[1]}>
          {this.props.features.map(feature => (
            <Fade>
              <Box
                sx={{
          background: "white",
                  pt: "5em",
                  pb: "3em",
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
                    width: ["95%", "60%", "50%", "35%"],
                    mx: "auto",
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
    height: "250px",
    width: "250px",
    minWidth: "250px",
    marginRight: "3em",
  }
  switch (logo) {
    case "source-code":
      return <SourceCode style={style} />
    case "fitness-tracker":
      return <FitnessTracker style={style} />
    case "medical-research":
      return <MedicalResearch style={style} />
  }
}
