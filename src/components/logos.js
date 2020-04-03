import Img from "gatsby-image";
import React from "react";
import { Box, Grid } from "theme-ui";


export class Logos extends React.Component {
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