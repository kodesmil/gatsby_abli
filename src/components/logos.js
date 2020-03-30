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
import Polaroid from "../../content/assets/svg/Polaroid.svg"
import OnTheWay from "../../content/assets/svg/OnTheWay.svg"
import Woman from "../../content/assets/svg/Woman.svg"

export class FsLogos extends React.Component {
    render() {
      return (
        <Grid
          gap="2em"
          columns={[5]}
          sx={{
            marginTop: "5em",
            alignItems: "center",
            alignContent: "center",
            background: "white",
            padding: "1em",
            boxShadow: "0px 0.5px 50px rgba(0,0,0,0.2)",
          }}
        >
          {this.props.logos.nodes.map(logo => (
            <Box>
              <Img
                style={{ maxHeight: "100px" }}
                imgStyle={{
                  filter: "grayscale(25%)",
                  maxHeight: "100px",
                  objectFit: "contain",
                }}
                fluid={logo.childImageSharp.fluid}
                alt=""
              />
            </Box>
          ))}
        </Grid>
      )
    }
  }