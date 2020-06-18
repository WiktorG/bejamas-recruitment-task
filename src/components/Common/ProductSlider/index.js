/** @jsx jsx */
import { jsx } from "theme-ui"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import ProductCard from "./../ProductCard"

const ProductSlider = () => (
  <div sx={style.sliderWrapper}>
    <Slider
      sx={style.slider}
      dots={false}
      arrows={false}
      slidesToShow={4}
      slidesToScroll={1}
      initialSlide={0}
      infinite
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
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Slider>
  </div>
)

export default ProductSlider

const style = {
  sliderWrapper: {
    marginTop: [40, 64],
  },
  slider: {
    width: "100%",
  },
  arrowLeft: {
    cursor: "pointer",
  },
  arrowRight: {
    cursor: "pointer",
  },
}
