exports.createPages = async({ actions, graphql }) => {
  const { productsData } = await graphql(`
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

  productsData.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    actions.createPage({
      path: `/product/${slug}`,
      component: require.resolve("./src/templates/product/index.js"),
      context: { slug: slug },
    })
  })
}
