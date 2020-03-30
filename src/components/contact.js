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

export class FsContact extends React.Component {
    render() {
      return (
        <Box
          anchor="contact"
          sx={{
            paddingTop: "7em",
            marginLeft: ["5%", "10%", "15%"],
            marginRight: ["5%", "10%", "15%"],
          }}
          id="contact"
          as="form"
          method="post"
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Styled.h3 style={{ textAlign: "center", fontWeight: "900" }}>
            Would you like to learn more?
          </Styled.h3>
          <Styled.p style={{ textAlign: "center", marginTop: "8px" }}>
            Leave us your contact
          </Styled.p>
          <Box sx={{ width: ["90%", "65%", "50%", "35%"], mx: "auto" }} mt={3}>
            <Input style={{background: "white"}} placeholder="Name" name="name" mb={3} />
            <Input style={{background: "white"}} placeholder="Email" type="email" name="password" mb={3} />
          </Box>
          <Button type="submit" sx={{ mx: "auto", display: "block" }}>
            Submit
          </Button>
  
          <Styled.p style={{ textAlign: "center", marginTop: "24px" }}>
            or use
          </Styled.p>
          <Styled.a
            style={{
              textAlign: "center",
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "16px",
            }}
            href="mailto:hello@abli.io?subject=Tell me more about Abli Health"
          >
            hello@abli.io
          </Styled.a>
        </Box>
      )
    }
  }