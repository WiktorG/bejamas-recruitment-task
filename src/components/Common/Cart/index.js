/** @jsx jsx */
import { jsx } from "theme-ui"

import {
  Container,
  Row,
} from "../../Grid"

import styles from "./styles"

export default function Cart() {
  return (
    <div sx={styles.cartWrapper}>
      <Container
        styles={styles.cartContainer}
      >
        <Row>
          <div sx={styles.cart}>
            <ul sx={styles.cartItems}>
              <li>123</li>
            </ul>
          </div>
        </Row>
      </Container>
    </div>
  )
}
