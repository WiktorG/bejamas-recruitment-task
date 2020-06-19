/** @jsx jsx */
import { jsx } from "theme-ui"

import Icon from "../../../images/icons/cart.svg"

import styles from "./styles"

export default function CartIcon() {
  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <a href="#" onClick={handleClick} sx={styles.iconWrapper}>
      <img src={Icon} alt="cart icon" />
      <span sx={{ ...styles.number }}>0</span>
    </a>
  )
}
