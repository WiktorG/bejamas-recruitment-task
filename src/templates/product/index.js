import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Product from "../../components/ProductPage"
import { Container } from "../../components/Grid"

export default function ProductPage({ data }) {
  const {
    name,
    description,
    price,
    tag,
    image,
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO title="Product" />
      <Container>
        <Product
          name={name}
          description={description}
          price={price}
          tag={tag}
          img={image.publicURL}
        />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        slug
        name
        description
        price
        tag
        image { 
          publicURL
        }
      }
    }
  }
`
