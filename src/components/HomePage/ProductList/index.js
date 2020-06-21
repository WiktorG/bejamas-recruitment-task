/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Row, Col } from "../../Grid"

import ProductSlider from "../../Common/ProductSlider"

import styles from "./styles"

export default function ProductList() {
  return (
    <section sx={{ p: ["60px 0", "60px 0", "105px 0"] }}>
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
