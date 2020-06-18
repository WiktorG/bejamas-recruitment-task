/** @jsx jsx */
import { jsx } from "theme-ui"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

import ArrowLeft from "../../../images/arrow_left.svg"
import ArrowRight from "../../../images/arrow_right.svg"

import ProductCard from './../ProductCard';

const ProductSlider = () => (
  <div sx={style.carouselWrapper}>
    <Carousel
      arrowLeft={<img src={ArrowLeft} sx={style.arrowLeft} />}
      arrowRight={<img src={ArrowRight} sx={style.arrowRight} />}
      slidesPerPage={4}
      infinite
      addArrowClickHandler
      breakpoints={{
        768: {
          slidesPerPage: 1,
        },
        980: {
          slidesPerPage: 2,
        },
        1200: {
          slidesPerPage: 3,
        },
      }}
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Carousel>
  </div>
)

export default ProductSlider

const style = {
  carouselWrapper: {
    marginTop: [40, 64],
  },
  arrowLeft: {
    cursor: "pointer",
  },
  arrowRight: {
    cursor: "pointer",
  },
}
