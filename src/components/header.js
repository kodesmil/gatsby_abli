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

export class FsHeader extends React.Component {
    render() {
      return (
        <Box
          sx={{
            position: "relative",
            minHeight: "100vh",
          }}
          as="section"
        >
          <Box
            sx={{
              position: "absolute",
              marginLeft: ["5%", "10%", "25%"],
              marginRight: ["5%", "10%", "25%"],
              marginTop: ["40%", "20%", "10%"],
            }}
          >
            <Styled.h1
              style={{
                color: "black",
                lineHeight: 0.95,
                textAlign: "center",
              }}
            >
              AI-based <span style={{
                    background: "linear-gradient(54.4deg, #31B1E7 10.45%, #268CF5 50%, #2F58F7 89.55%)",
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
              }}>health</span> care platform 
            </Styled.h1>
            <Styled.h3
              style={{
                color: "black",
                textAlign: "center",
                marginTop: "32px",
              }}
            >
              We are transforming the lives of people with behavioural health and
              chronic diseases through data-driven medicine.
            </Styled.h3>
            <Woman
              style={{
                height: "250px",
                width: "100%",
                marginTop: "64px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            ></Woman>
          </Box>
        </Box>
      )
    }
  }