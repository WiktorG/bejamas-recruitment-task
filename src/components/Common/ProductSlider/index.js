/** @jsx jsx */
import { jsx } from "theme-ui"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

import ArrowLeft from "../../../images/arrow_left.svg"
import ArrowRight from "../../../images/arrow_right.svg"

const ProductSlider = () => (
  <div sx={style.carouselWrapper}>
    <Carousel
      arrowLeft={<img src={ArrowLeft} styles={style.arrowLeft} />}
      arrowRight={<img src={ArrowRight} styles={style.arrowRight} />}
    >
      
    </Carousel>
  </div>
)

export default ProductSlider

const style = {
  carouselWrapper: {
    marginTop: [40, 64],
  },
  arrowLeft: {

  },
  arrowRight: {

  },
}
