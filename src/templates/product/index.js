import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Product from "../../components/ProductTemplate/Product"
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
        <Product />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
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
