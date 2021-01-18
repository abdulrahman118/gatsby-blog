import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header siteTitle={data.allSite.nodes[0].siteMetadata.title} />
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  query {
    allSite {
      nodes {
        siteMetadata {
          title
        }
      }
    }
  }
`
