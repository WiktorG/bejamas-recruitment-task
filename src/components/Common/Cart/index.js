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

const CartItems = ({ items }) => items.map(({ img, name, price }, index) =>
  <li key={index} sx={styles.cartItem}>
    <img src={img} sx={styles.productImg} />
    <span sx={styles.productName}>{name} #{index + 1}</span>
    <span>{price}$</span>
  </li>,
)

export default function Cart() {
  const dispatch = useDispatch()
  const wrapperRef = useRef()
  const cartRef = useRef()
  const { isVisible, items } = useSelector(cartSelector)

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !cartRef.current.contains(event.target)) {
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
      ref={wrapperRef}
      onClick={handleClickOutside}
    >
      <span sx={styles.cartOverlay} />
      <Container styles={styles.cartContainer}>
        <Row>
          <div sx={styles.cart} ref={cartRef}>
            <ul sx={styles.cartItems}>
              <CartItems items={items} />
            </ul>
            <button sx={styles.button}>Submit</button>
          </div>
        </Row>
      </Container>
    </div>
  )
}
