/** @jsx jsx */
import { jsx } from "theme-ui"
import { useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { closeCart } from "redux/actions/cartActions"
import { cart as cartSelector } from "redux/selectors/cartSelectors"

import {
  Container,
  Row,
} from "components/Grid"

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

  const handleClickOutside = (e) => {
    e.stopPropagation()
    if (wrapperRef.current && !cartRef.current.contains(e.target)) {
      dispatch(closeCart())
    }
  }

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("click", handleClickOutside)
    }
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isVisible])

  return isVisible && (
    <div
      sx={{
        ...styles.cartWrapper,
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      ref={wrapperRef}
    >
      <span sx={styles.cartOverlay} />
      <Container styles={styles.cartContainer}>
        <Row>
          <div
            sx={{
              ...styles.cart,
              opacity: isVisible ? 1 : 0,

            }}
            ref={cartRef}
          >
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
