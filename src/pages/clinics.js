import React from "react"
import { NavLink } from "theme-ui"
import { Contact } from "../components/contact"
import { Footer } from "../components/footer"
import { Header as Header } from "../components/header"
import { Offer } from "../components/offer"
import SEO from "../components/seo"
import { Smile } from "../components/smile"
import { TobBar } from "../components/toolBar"
import Layout from "../layouts"
import { About } from "../components/about"
import Fade from "react-reveal/Fade"

export default ({ data, location }) => {
  const siteData = data.site.siteMetadata.clinics
  const siteTitle = siteData.heading
  return (
    <Layout location={location}>
      <SEO title={siteTitle} />
      <TobBar>
        <NavLink style={{ color: "white", fontSize: "20px" }} href="/">
          Abli Health
        </NavLink>
        <div style={{ flex: "auto" }}></div>
        <NavLink style={{ color: "white" }} href="/patients" p={2}>
          For patients
        </NavLink>
      </TobBar>
      <Header header={siteData.header} />
      <Fade>
        <About data={siteData.about} />
      </Fade>
      <Offer features={siteData.benefits} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        clinics {
          header {
            logo
            heading
            description
          }
          about {
            description
          }
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
