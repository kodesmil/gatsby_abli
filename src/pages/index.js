import React from "react";
import Fade from "react-reveal/Fade";
import { NavLink } from "theme-ui";
import { FsContact } from "../components/contact";
import { FsFooter } from "../components/footer";
import { FsHeader } from "../components/header";
import { FsOffer } from "../components/offer";
import SEO from "../components/seo";
import { FsSmile } from "../components/smile";
import { FsTobBar } from "../components/toolBar";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <div style={{ background: "#f5fefe" }}>
      <SEO title={siteTitle} />
      <FsTobBar>
        <NavLink style={{ color: "white" }} as="h1" href="#!">
          Abli Health
        </NavLink>
        <div style={{ flex: "auto" }}></div>
        <NavLink style={{ color: "white" }} href="#contact" p={2}>
          Contact
        </NavLink>
      </FsTobBar>
      <FsHeader />
      <Fade>
        <FsOffer features={data.site.siteMetadata.features} />
        <FsSmile />
        <FsContact />
        <FsFooter />
      </Fade>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        features {
          logo
          heading
          description
        }
      }
    }
    background: file(relativePath: { eq: "feature.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logos: allFile(filter: { relativePath: { regex: "/partners/logo_/" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    pictures: allFile(filter: { relativePath: { regex: "/parties//" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
