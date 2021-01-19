
const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`{
  allMarkdownRemark(sort: {fields:[frontmatter___date],order:DESC}) {
    edges {
      node {        
        frontmatter {          
          slug
        }
      }
    }
  }
}
`).then(result => {
    const posts = result.data.allMarkdownRemark.edges;
    posts.forEach(({ node }, index) => {
      const next = index === posts.length - 1 ? null : posts[index + 1].node
      const previous = index === 0 ? null : posts[index - 1].node

      createPage({
        path: node.frontmatter.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: node.frontmatter.slug,
          previous,
          next
        }
      })
    })
  })


}