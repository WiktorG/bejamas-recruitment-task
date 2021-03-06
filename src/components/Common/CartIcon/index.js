/** @jsx jsx */
import { jsx } from "theme-ui"
import { useDispatch, useSelector } from "react-redux"

import { toggleCart } from "redux/actions/cartActions"
import { cart as cartSelector } from "redux/selectors/cartSelectors"

import Icon from "images/icons/cart.svg"
import AngleDown from "images/icons/angle_up.svg"

import styles from "./styles"

export default function CartIcon() {
  const dispatch = useDispatch()
  const { isVisible, items } = useSelector(cartSelector)
  const itemsCount = items.length

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (items.length > 0) {
      dispatch(toggleCart())
    }
  }

  return (
    <a href="#" onClick={handleClick} sx={styles.iconWrapper}>
      <img src={Icon} alt="cart icon" sx={styles.icon} />
      <span
        sx={{
          ...styles.number,
          backgroundColor: itemsCount > 0 ? "background.badge" : "background.badgeEmpty",
        }}
      >
        {itemsCount}
      </span>
      <img
        src={AngleDown}
        alt="arrow"
        sx={{
          ...styles.angle,
          transform: `translateX(20px) ${isVisible ? "rotate(0)" : "rotate(180deg)"}`,
        }}
      />
    </a>
  )
}
