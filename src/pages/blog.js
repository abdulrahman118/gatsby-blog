import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Header from "../components/header"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  text-decoration: none;
  color: #333;
  border-bottom: 1px solid #e8e8e8;
  transition: color 0.25s, padding-left 0.25s;
  font-size: 0.9rem;
  &:hover {
    color: #0087f8;
    padding-left: 1rem;
  }
`

const Blogs = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blogs" />
      <Header
        siteTitle={data.allSite.nodes[0].siteMetadata.title}
        description={data.allSite.nodes[0].siteMetadata.current}
      />
      <h3
        style={{
          fontSize: `1.15rem`,
        }}
      >
        Total posts: {data.allMarkdownRemark.totalCount}
      </h3>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <BlogLink to={node.frontmatter.slug}>
            <span>{node.frontmatter.title}</span>
            <span>{node.frontmatter.date}</span>
          </BlogLink>
        </div>
      ))}
    </Layout>
  )
}
export default Blogs

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
            slug
          }
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
`
