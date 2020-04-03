import React from "react"
import { Contact } from "../components/contact"
import { Footer } from "../components/footer"
import { Smile } from "../components/smile"

const Layout = ({ location, children }) => 
  <div location={location} style={{ background: "#f5fefe" }}>
    {children}
    <Smile />
    <Contact />
    <Footer />
  </div>


export default Layout
