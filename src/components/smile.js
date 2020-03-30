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

export class FsSmile extends React.Component {
    render() {
      return (
        <Box sx={{ marginTop: "7em", width: ["80%", "60%", "40%", "30%"], mx: "auto" }}>
          <Styled.h1 style={{ textAlign: "center" }}> 🥳</Styled.h1>
          <Styled.p style={{ marginTop: "16px", textAlign: "center" }}>
          Abli is changing the delivery model of healthcare using an AI-enabled platform where practitioners can personalise care, using data from widely adopted smartphones and smartwatches.
          </Styled.p>
        </Box>
      )
    }
  }