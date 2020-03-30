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

export class FsPricing extends React.Component {
    render() {
      return (
        <Box
          sx={{
            marginTop: "5em",
            marginLeft: ["5%", "10%", "15%"],
            marginRight: ["5%", "10%", "15%"],
          }}
        >
          <Styled.h3
            style={{
              textAlign: "center",
            }}
          >
            How much does it cost?
          </Styled.h3>
          <Styled.p style={{ marginTop: "8px", textAlign: "center" }}>
            Only 3000 NOK/h for first 2 hours and 1000 NOK/h next ones
          </Styled.p>
        </Box>
      )
    }
  }