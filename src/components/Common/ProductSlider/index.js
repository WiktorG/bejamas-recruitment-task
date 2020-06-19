/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import styles from "./styles"

import ArrowLeft from "./../../../images/arrow_left.svg"
import ArrowRight from "./../../../images/arrow_right.svg"

import ProductCard from "./../ProductCard"

const ProductSlider = () => {
  const data = useStaticQuery(graphql`{
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            image {
              publicURL
            }
            slug
            name
            excerpt
            price
          }
        }
      }
    }
  }`)

  return (
    <div sx={styles.sliderWrapper}>
      <img src={ArrowLeft} sx={styles.arrowLeft} />
      <Slider
        dots={false}
        arrows={false}
        slidesToShow={4}
        slidesToScroll={1}
        initialSlide={0}
        centerPadding={0}
        infinite
        draggable
        responsive={[{
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        }, {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        }]}
      >
        {data.allMarkdownRemark.edges.map(({ node }, i) => (
          <ProductCard
            key={i}
            url={`/product/${node.frontmatter.slug}`}
            img={node.frontmatter.image.publicURL}
            title={node.frontmatter.name}
            description={node.frontmatter.excerpt}
          />
        ))}
      </Slider>
      <img src={ArrowRight} sx={styles.arrowRight} />
    </div>
  )
}

export default ProductSlider
