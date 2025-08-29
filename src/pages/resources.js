import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const ResourceItem = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e8e8e8;
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`

const ResourceTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  
  a {
    color: #333;
    text-decoration: none;
    
    &:hover {
      color: #0087f8;
    }
  }
`

const ResourceDescription = styled.p`
  margin-bottom: 0.5rem;
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
`

const ResourceLink = styled.a`
  color: #0087f8;
  text-decoration: none;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
  
  &:after {
    content: " ↗";
    font-size: 0.8rem;
  }
`

const Resources = () => {
  const data = useStaticQuery(graphql`
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
  `)

  const resources = [
    {
      title: "Roadmap.sh",
      description: "roadmap.sh is a widely-adopted, community-driven platform that offers interactive, visual roadmaps, guides, video tutorials, project ideas, and best practices for developers. It's designed to clarify learning paths across a wide array of roles—such as Frontend, Backend, DevOps, AI Engineer, Product Manager—and skills, including JavaScript, Kubernetes, System Design, SQL, and more",
      url: "https://roadmap.sh/"
    },
    {
      title: "EasyNetQ",
      description: "A simple .NET API for RabbitMQ that makes message queuing straightforward. Great abstraction over the complexity of AMQP.",
      url: "https://easynetq.com/"
    },
    {
      title: "Submarine Cable Map",
      description: "Interactive map showing the internet's physical infrastructure - the optical fiber cables that connect the world.",
      url: "https://www.submarinecablemap.com/"
    },
    {
      title: "Stack Overflow Trends",
      description: "Compare the popularity of different technologies over time using Stack Overflow question data.",
      url: "https://insights.stackoverflow.com/trends"
    }
    // Add more resources here as you discover them
  ]

  return (
    <Layout>
      <SEO title="Resources" />
      <Header
        siteTitle={data.allSite.nodes[0].siteMetadata.title}
        description={data.allSite.nodes[0].siteMetadata.current}
      />
      <div>
        <p style={{ marginBottom: "2rem", fontStyle: "italic", color: "#666" }}>
          Useful resources I've come across.
        </p>
        
        {resources.map((resource, index) => (
          <ResourceItem key={index}>
            <ResourceTitle>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </ResourceTitle>
            <ResourceDescription>
              {resource.description}
            </ResourceDescription>
            <ResourceLink href={resource.url} target="_blank" rel="noopener noreferrer">
              Visit Resource
            </ResourceLink>
          </ResourceItem>
        ))}
      </div>
    </Layout>
  )
}

export default Resources