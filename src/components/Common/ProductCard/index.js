/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import styles from "./styles"

export default function ProductCard({ url, img, title, excerpt }) {
  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <Link sx={styles.card} to={url}>
      <img src={img} sx={styles.image} />
      <Styled.h4 sx={styles.title}>{title}</Styled.h4>
      <Styled.p sx={styles.excerpt}>{excerpt}</Styled.p>
      <button sx={styles.button} onClick={handleClick}>+</button>
    </Link>
  )
}

ProductCard.propTypes = {
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
}
