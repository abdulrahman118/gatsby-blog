import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MyPhoto from "../components/MyPhoto"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header
        siteTitle={data.allSite.nodes[0].siteMetadata.title}
        description={data.allSite.nodes[0].siteMetadata.current}
      />
      <div className="my-photo">
        <MyPhoto />
        <div className="home-content" style={{fontSize:"large"}}>
          <p>
            <em>
              Working as a .NET full stack software engineer for the last{" "}
              {new Date().getFullYear() - 2016} years. My professional journey
              has taken me to acquire skills in .NET MVC web applications, web
              API, windows applications, windows services. I spent my most of
              the time on the backend, writing business logic for the
              applications and managing database hence I got some good
              undestanding in SQL too. I created this website after learning
              fundamentals of React.
            </em>
          </p>
          <p><em><q>What we know is a drop, what we don't know is an ocean.</q></em></p>
          <p><em><q>Wherever you are, whatever you do, be in love.</q></em></p>
        </div>
      </div>
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
          current
        }
      }
    }
  }
`
