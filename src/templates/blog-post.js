import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components'

const NavLink = styled(Link)`
text-decoration:none;
&:hover {
    color: #0087F8;    
  }
`

const BlogPostTemplate = ({ data, pageContext }) => {


    const post = data.markdownRemark;
    // console.log(post);
    const { previous, next } = pageContext;
    return (
        <Layout>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <article style={{
                marginBottom:`3rem`
            }}>
                <header style={{
                    textAlign: `center`,
                    marginTop: `1rem`
                }}>
                    <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
                    <h1 style={{
                        fontSize:`2rem`,
                        marginBottom:`3rem`
                    }}>{post.frontmatter.title}</h1>
                </header>
                <div>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            </article>
            <nav>
                <ul
                    style={{
                        display: `flex`,
                        flexWrap: `wrap`,
                        justifyContent: `space-between`,
                        listStyle: `none`,
                        padding: 0,
                    }}
                >
                    <li>
                        {previous && (
                            <NavLink to={previous.fields.slug} rel="prev">
                                ← {previous.frontmatter.title}
                            </NavLink>
                        )}
                    </li>
                    <li>
                        {next && (
                            <NavLink to={next.fields.slug} rel="next">
                                {next.frontmatter.title} →
                </NavLink>
                        )}
                    </li>
                </ul>
            </nav>
        </Layout >
    )

}

export default BlogPostTemplate;

export const query = graphql`
query($slug: String!){
    markdownRemark(fields:{slug:{eq:$slug}}){
        html
        frontmatter{
            title,
            date
        }
    }
}
`