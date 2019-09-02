import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
text-decoration:none;
`

const BlogTitle = styled
const IndexPage = ({data}) =>{ 
  // console.log(data);
  
  return(
  <Layout>
    <SEO title="Home" />    
    <h1>Welcome to your new Gatsby site.</h1>
      <h3>Total count: {data.allMarkdownRemark.totalCount}</h3>
    {
      data.allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id}>
          <BlogLink to={node.fields.slug}>
            <h4>{node.frontmatter.title} - {node.frontmatter.date}</h4>
          </BlogLink>
        
        <p>{node.excerpt}</p>
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
}

`
