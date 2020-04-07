import React from "react"
import { NavLink } from "theme-ui"
import { Header } from "../components/header"
import { Offer } from "../components/offer"
import SEO from "../components/seo"
import { TobBar } from "../components/toolBar"
import Layout from "../layouts"
import about from "../components/about";

export default ({ data, location }) => {
  const siteData = data.site.siteMetadata.home
  const siteTitle = siteData.heading
  return (
    <Layout location={location} clinicPage={true}>
      <SEO title={siteTitle} />
      <TobBar>
        <NavLink style={{ color: "white", fontSize: "24px" }} href="/">
          Abli Health
        </NavLink>
        <div style={{flex: "auto"}}/>
        <NavLink style={{ color: "white" }} href="/clinics" p={2}>
          Clinics
        </NavLink>
        <NavLink style={{ color: "white" }} href="/patients" p={2}>
          Patients
        </NavLink>
      </TobBar>
      <Header header={siteData.header} />
      <Offer features={siteData.benefits} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        home {
          header {
            logo
            heading
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
