/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Row, Col } from "components/Grid"

import ProductSlider from "components/HomePage/ProductSlider"

import styles from "./styles"

export default function ProductList() {
  return (
    <section sx={styles.wrapper}>
      <Row>
        <Col styles={styles.headingWrapper}>
          <Styled.h2 sx={styles.heading}>
            Explore community choices
          </Styled.h2>
          <Styled.p sx={styles.paragraph}>
            Updated daily based on most popular choices
            <br />
            among dev community
          </Styled.p>
        </Col>
      </Row>
      <Row>
        <Col>
          <ProductSlider />
        </Col>
      </Row>
    </section>
  )
}
