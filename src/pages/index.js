import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'
import Header from "../components/header"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.5rem 0;
text-decoration:none;
color:#333;
border-bottom: 1px solid #E8E8E8;
transition: color .25s, padding-left .25s;
font-size: 0.9rem;
&:hover {
    color: #0087F8;
    padding-left: 1rem;
  }
`

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Home" />
      <Header siteTitle={data.allSite.nodes[0].siteMetadata.title} />
      <h3 style={{
        fontSize: `1.15rem`
      }} >
        Total posts: {data.allMarkdownRemark.totalCount}</h3>
      {
        data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <span>{node.frontmatter.title}</span>
              <span>{node.frontmatter.date}</span>
            </BlogLink>
          </div>
        ))
      }
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
query {
  allMarkdownRemark(sort: {fields:[frontmatter___date],order:DESC}) {
    totalCount
    edges {
      node {
        excerpt
        fileAbsolutePath
        html
        id
        frontmatter {
          date
          description
          title
        }
        fields {
          slug
        }
      }
    }
  }
  allSite {
    nodes {
      siteMetadata {
        title
      }
    }
  }
}

`
