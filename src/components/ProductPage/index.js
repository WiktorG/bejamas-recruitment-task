/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"

import { productAddToCart } from "redux/actions/cartActions"

import { Row, Col } from "components/Grid"

import styles from "./styles"

export default function Product({
  name,
  description,
  price,
  tag,
  img,
}) {
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
    <section sx={styles.productWrapper}>
      <Row styles={styles.productRow}>
        <Col styles={styles.imgWrapper}>
          <img src={img} alt="product image" sx={styles.img} />
        </Col>
        <Col styles={styles.infoWrapper}>
          <span sx={styles.tag}>{tag}</span>
          <h1 sx={styles.name}>{name}</h1>
          <Styled.p sx={styles.description}>{description}</Styled.p>
          <span sx={styles.price}>{`$${price}`}</span>
          <button
            sx={styles.button}
            onClick={handleClick}
          >
            Add to Cart
          </button>
        </Col>
      </Row>
    </section>
  )
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  tag: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
}
