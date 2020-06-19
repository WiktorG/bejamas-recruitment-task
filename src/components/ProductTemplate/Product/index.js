/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"
import { Row, Col } from "../../Grid"

import styles from "./styles"

function Product({
  name,
  description,
  price,
  tag,
  image,
}) {
  return (
    <section sx={styles.productWrapper}>
      <Row styles={{ justifyContent: "center", alignItems: "center", width: ["1", null, null, null, "unset"] }}>
        <Col styles={styles.imgWrapper}>
          <img src={image.publicURL} alt="Dummy Product" sx={styles.img} />
        </Col>
        <Col styles={styles.infoWrapper}>
          <span sx={styles.tag}>{tag}</span>
          <h1 sx={styles.name}>{name}</h1>
          <Styled.p sx={styles.description}>{description}</Styled.p>
          <span sx={styles.price}>{`$${price}`}</span>
          <button sx={styles.button}>Add to Cart</button>
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
  image: PropTypes.object.isRequired,
}

export default Product
