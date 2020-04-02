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
  switch (logo) {
    case "source-code":
      return (
        <Box sx={style}>
          <SourceCode style={{ height: "inherit", width: "inherit" }} />
        </Box>
      )
    case "fitness-tracker":
      return (
        <Box sx={style}>
          <FitnessTracker style={{ height: "inherit", width: "inherit" }} />
        </Box>
      )
    case "medical-research":
      return (
        <Box sx={style}>
          <MedicalResearch style={{ height: "inherit", width: "inherit" }} />
        </Box>
      )
  }
}
