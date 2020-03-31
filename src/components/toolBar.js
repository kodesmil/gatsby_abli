import React from "react";
import { Flex } from "theme-ui";


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