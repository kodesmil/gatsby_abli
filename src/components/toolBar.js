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

export class FsTobBar extends React.Component {
    render() {
      return (
        <Flex
          sx={{
            paddingLeft: ["5%", "10%", "15%"],
            paddingRight: ["5%", "10%", "15%"],
            alignItems: "baseline",
            paddingTop: `1rem`,
            width: `100%`,
            paddingBottom: `0.5rem`,
            position: `fixed`,
            background: `#2F4465`,
            zIndex: `100000`,
          }}
          as="nav"
        >
          {this.props.children}
        </Flex>
      )
    }
  }