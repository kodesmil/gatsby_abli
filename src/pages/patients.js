import React from "react"
import Fade from "react-reveal/Fade"
import { NavLink } from "theme-ui"
import { Contact } from "../components/contact"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { Offer } from "../components/offer"
import SEO from "../components/seo"
import { Smile } from "../components/smile"
import { TobBar } from "../components/toolBar"
import Layout from "../layouts"

export default ({ data, location }) => {
  const siteData = data.site.siteMetadata.patients
  const siteTitle = siteData.heading
  return (
    <Layout location={location}>
      <SEO title={siteTitle} />
      <TobBar>
        <NavLink style={{ color: "white", fontSize: "24px" }} href="/">
          Abli Health
        </NavLink>
        <div style={{ flex: "auto" }}></div>
        <NavLink style={{ color: "white" }} href="clinics" p={2}>
          For clinics
        </NavLink>
        <NavLink style={{ color: "white" }} href="#contact" p={2}>
          Contact
        </NavLink>
      </TobBar>
      <Header />
      <Offer features={siteData.benefits} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        home {
          heading
          description
          benefits {
            logo
            heading
            description
          }
        }
      }
    }
  }
`
