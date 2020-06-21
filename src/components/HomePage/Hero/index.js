/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Row, Col } from "../../Grid"

import HeroBackground from "../../../images/elements/hero_background.svg"
import HeroImage from "../../../images/elements/monitor.svg"

import styles from "./styles"

function HomepageHero() {
  return (
    <section sx={{ paddingTop: [60, 60, 105] }}>
      <Row styles={{ justifyContent: ["center"] }}>
        <Col styles={styles.imgWrapper}>
          <img src={HeroImage} alt="Vector Monitor" sx={{ maxWidth: "1" }} />
        </Col>
        <Col styles={styles.leadWrapper}>
          <Styled.h1 sx={styles.heading}>
            Don't waste time
            <br />
            on boring things
          </Styled.h1>
          <button sx={styles.button}>
            GO EXPLORE
          </button>
        </Col>
      </Row>
      <img src={HeroBackground} sx={styles.backgroundImg} />
    </section>
  )
}

export default HomepageHero
