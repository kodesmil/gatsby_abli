import React from "react"
import { Contact } from "../components/contact"
import { Footer } from "../components/footer"
import { Smile } from "../components/smile"
import Fade from "react-reveal/Fade"

const Layout = ({ location, clinicPage, children }) =>
  <div location={location} style={{ background: "white" }}>
    {children}
    <Fade>
      <Smile />
        {clinicPage ?
            <Contact isClinic={clinicPage} heading={"Join our pilot"} description={"Sign up here"} button={"Sign up"} />
:
            <Contact isClinic={clinicPage} heading={"Would you like to learn more?"} description={"Contact us here"} button={"Submit"} />
        }
      <Footer />
    </Fade>
  </div>


export default Layout
