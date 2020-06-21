/** @jsx jsx */
import { jsx } from "theme-ui"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import { closeCart } from "./../../../redux/actions/cartActions"
import { cart as cartSelector } from "./../../../redux/selectors/cartSelectors"

import {
  Container,
  Row,
} from "../../Grid"

import styles from "./styles"

export default function Cart() {
  const dispatch = useDispatch()
  const cartRef = useRef()
  const { isVisible, items } = useSelector(cartSelector)

  const handleOverlayClick = (e) => {
    if (e.target !== cartRef.current) {
      dispatch(closeCart())
    }
  }

  return (
    <div
      sx={{
        ...styles.cartWrapper,
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      onClick={handleOverlayClick}
    >
      <span sx={styles.cartOverlay} />
      <Container styles={styles.cartContainer}>
        <Row>
          <div sx={styles.cart} ref={cartRef}>
            <ul sx={styles.cartItems}>
              <li>123</li>
            </ul>
          </div>
        </Row>
      </Container>
    </div>
  )
}
