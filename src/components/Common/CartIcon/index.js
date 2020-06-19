/** @jsx jsx */
import { jsx } from "theme-ui"
import { useDispatch, useSelector } from "react-redux"

import { toggleCart } from "./../../../redux/actions/cartActions"
import { cart as cartSelector } from "./../../../redux/selectors/cartSelectors"

import Icon from "../../../images/icons/cart.svg"

import styles from "./styles"

export default function CartIcon() {
  const dispatch = useDispatch()
  const { items } = useSelector(cartSelector)
  const itemsCount = items.length

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(toggleCart())
  }

  return (
    <a href="#" onClick={handleClick} sx={styles.iconWrapper}>
      <img src={Icon} alt="cart icon" />
      <span sx={{ ...styles.number }}>{itemsCount}</span>
    </a>
  )
}
