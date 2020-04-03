import React, { Children } from "react"
import { Link, graphql } from "gatsby"
import Fade from "react-reveal/Fade"

import SEO from "./seo"
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

export class Svg extends React.Component {
  render() {
    return (
      renderLogo(this.props.logo)
    )
  }
}

function renderLogo(logo) {
  let style = { height: "inherit", width: "inherit" }
  switch (logo) {
    case "source-code":
      return <SourceCode style={style} />
    case "fitness-tracker":
      return <FitnessTracker style={style} />
    case "medical-research":
      return <MedicalResearch style={style} />
  }
}
