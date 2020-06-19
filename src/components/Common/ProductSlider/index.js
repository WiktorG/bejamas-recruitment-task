/** @jsx jsx */
import { jsx } from "theme-ui"
import { useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import styles from "./styles"

import ArrowLeft from "./../../../images/arrow_left.svg"
import ArrowRight from "./../../../images/arrow_right.svg"

import ProductCard from "./../ProductCard"

export default function ProductSlider() {
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
  const sliderRef = useRef()

  const slideLeft = (e) => {
    e.preventDefault()
    sliderRef.current.slickPrev()
  }

  const slideRight = (e) => {
    e.preventDefault()
    sliderRef.current.slickNext()
  }

  return (
    <div sx={styles.sliderWrapper}>
      <button sx={styles.arrowLeftWrapper} onClick={slideLeft}>
        <img src={ArrowLeft} sx={styles.arrow} />
      </button>
      <Slider
        ref={sliderRef}
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
          breakpoint: 991,
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
            excerpt={node.frontmatter.excerpt}
          />
        ))}
      </Slider>
      <button sx={styles.arrowRightWrapper} onClick={slideRight}>
        <img src={ArrowRight} sx={styles.arrow} />
      </button>
    </div>
  )
}
