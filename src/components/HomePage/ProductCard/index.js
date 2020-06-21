/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import { Link } from "gatsby"

import { productAddToCart } from "./../../../redux/actions/cartActions"

import styles from "./styles"

export default function ProductCard({ url, img, name, excerpt, price }) {
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const product = {
      img,
      name,
      price,
    }

    dispatch(productAddToCart(product))
  }

  return (
    <Link sx={styles.card} to={url}>
      <img src={img} sx={styles.img} />
      <Styled.h4 sx={styles.name}>{name}</Styled.h4>
      <Styled.p sx={styles.excerpt}>{excerpt}</Styled.p>
      <button sx={styles.button} onClick={handleClick}>+</button>
    </Link>
  )
}

ProductCard.propTypes = {
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
}
