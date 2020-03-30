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

export class FsPictures extends React.Component {
    render() {
      return (
        <Grid
          gap="0"
          columns={[2, 3, 3, 6]}
          sx={{
            background: "white",
            boxShadow: "0px 0.5px 50px rgba(0,0,0,0.2)",
          }}
        >
          {this.props.pictures.nodes.map(picture => (
            <Img
              style={{
                height: "200px",
              }}
              imgStyle={{
                filter: "grayscale(25%)",
                objectFit: "cover",
                height: "200px",
              }}
              fluid={picture.childImageSharp.fluid}
              alt=""
            />
          ))}
        </Grid>
      )
    }
  }