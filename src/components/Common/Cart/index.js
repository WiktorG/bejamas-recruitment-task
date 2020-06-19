/** @jsx jsx */
import { jsx } from "theme-ui"
import { useDispatch, useSelector } from "react-redux"

import { toggleCart } from "./../../../redux/actions/cartActions"
import { cart as cartSelector } from "./../../../redux/selectors/cartSelectors"

import {
  Container,
  Row,
} from "../../Grid"

import styles from "./styles"

export default function Cart() {
  const { isVisible } = useSelector(cartSelector)

  return (
    <div
      sx={{
        ...styles.cartWrapper,
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <span
        sx={styles.cartOverlay}
      />
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
