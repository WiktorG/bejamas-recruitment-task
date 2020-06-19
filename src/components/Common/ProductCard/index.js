/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import styles from "./styles"

const ProductCard = ({ url, img, title, description }) => {
  return (
    <Link sx={styles.card} to={url}>
      <img src={img} sx={styles.image} />
      <Styled.h4 sx={styles.title}>{title}</Styled.h4>
      <Styled.p sx={styles.description}>{description}</Styled.p>
      <button sx={styles.button}>+</button>
    </Link>
  )
}

ProductCard.propTypes = {
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default ProductCard
