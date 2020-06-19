exports.createPages = async({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    console.log(slug)
    actions.createPage({
      path: `/product/${slug}`,
      component: require.resolve("./src/templates/product/index.js"),
      context: { slug: slug },
    })
  })
}
