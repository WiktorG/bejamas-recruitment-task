/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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
    <div sx={style.sliderWrapper}>
      <Slider
        dots={false}
        arrows={false}
        slidesToShow={4}
        slidesToScroll={1}
        initialSlide={0}
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
    </div>
  )
}

export default ProductSlider

const style = {
  sliderWrapper: {
    marginTop: [40, 64],
  },
  arrowLeft: {
    cursor: "pointer",
  },
  arrowRight: {
    cursor: "pointer",
  },
}
