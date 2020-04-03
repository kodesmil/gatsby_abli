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
import FitnessTracker from "../../content/assets/svg/FitnessTracker.svg"
import MedicalResearch from "../../content/assets/svg/MedicalResearch.svg"
import SourceCode from "../../content/assets/svg/SourceCode.svg"
import Biking from "../../content/assets/svg/Biking.svg"
import Doctors from "../../content/assets/svg/Doctors.svg"
import Firmware from "../../content/assets/svg/Firmware.svg"
import Goals from "../../content/assets/svg/Goals.svg"
import Medicine from "../../content/assets/svg/Medicine.svg"
import Yoga from "../../content/assets/svg/Yoga.svg"
import Workout from "../../content/assets/svg/Workout.svg"
import Woman from "../../content/assets/svg/Woman.svg"
import WalkingAround from "../../content/assets/svg/WalkingAround.svg"
import Stability from "../../content/assets/svg/Stability.svg"
import Monitor from "../../content/assets/svg/Monitor.svg"
import Nature from "../../content/assets/svg/Nature.svg"
import Sentiment from "../../content/assets/svg/Sentiment.svg"
import Analyze from "../../content/assets/svg/Analyze.svg"

export class Svg extends React.Component {
  render() {
    return renderLogo(this.props.logo)
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
    case "woman":
      return <Woman style={style} />
    case "biking":
      return <Biking style={style} />
    case "doctors":
      return <Doctors style={style} />
    case "firmware":
      return <Firmware style={style} />
    case "goals":
      return <Goals style={style} />
    case "medicine":
      return <Medicine style={style} />
    case "monitor":
      return <Monitor style={style} />
    case "nature":
      return <Nature style={style} />
    case "sentiment":
      return <Sentiment style={style} />
    case "stability":
      return <Stability style={style} />
    case "walking-around":
      return <WalkingAround style={style} />
    case "workout":
      return <Workout style={style} />
    case "yoga":
      return <Yoga style={style} />
    case "analyze":
      return <Analyze style={style} />
  }
}
