/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Row, Col } from "../../Grid"

const HomepageProducts = () => (
  <section sx={{ paddingTop: [60, 60, 105] }}>
    <Row>
      <Col styles={styles.headingWrapper}>
        <Styled.h2 sx={styles.heading}>
          Explore community choices
        </Styled.h2>
        <Styled.p>
          Updated daily based on most popular choices
          <br />
          among dev community
        </Styled.p>
      </Col>
    </Row>
  </section>
)

export default HomepageProducts

const styles = {
  headingWrapper: {
    textAlign: ["center", null, "left"],
    br: {
      display: ["none", "inherit"],
    },
  },
  heading: {
    variant: "text.heading",
    fontFamily: "body",
    fontWeight: "bold",
    marginBottom: "20px",
  },
}
