import React from "react"
import { Contact } from "../components/contact"
import { Footer } from "../components/footer"
import { Smile } from "../components/smile"
import Fade from "react-reveal/Fade"

const Layout = ({ location, children }) => 
  <div location={location} style={{ background: "#fafefe" }}>
    {children}
    <Fade>
      <Smile />
      <Contact />
      <Footer />
    </Fade>
  </div>


export default Layout
