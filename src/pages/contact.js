import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Header from "../components/header"
import SEO from "../components/seo"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      twitterImage: file(relativePath: { eq: "twitter.png" }) {
        childImageSharp {
          fixed(width: 45, height: 45) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      gmailImage: file(relativePath: { eq: "gmail.png" }) {
        childImageSharp {
          fixed(width: 45, height: 45) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      allSite {
        nodes {
          siteMetadata {
            title
            current
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Contact" />
      <Header
        siteTitle={data.allSite.nodes[0].siteMetadata.title}
        description={data.allSite.nodes[0].siteMetadata.current}
      />
      <div style={{ textAlign: "center" }}>
        <p>Hi there, stay in touch with me on:</p>
        <a
          style={{ marginRight: "3px" }}
          target="blank"
          href="https://twitter.com/dev_abdu"
        >
          <Img fixed={data.twitterImage.childImageSharp.fixed} alt="twitter" />
        </a>
        <a href="mailto:developer.abdulrahman@gmail.com">
          <Img fixed={data.gmailImage.childImageSharp.fixed} alt="gmail" />
        </a>
      </div>
    </Layout>
  )
}

export default ContactPage
