/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from "react-redux"
import { Global } from "@emotion/core"

import { closeCart } from "./../../redux/actions/cartActions"
import { cart as cartSelector } from "./../../redux/selectors/cartSelectors"

import Header from "../Header"

export default function Layout({ children }) {
  const dispatch = useDispatch()
  const { isVisible } = useSelector(cartSelector)

  // close cart on page change
  useEffect(() => {
    dispatch(closeCart())
  }, [])

  return (
    <>
      <Header />
      <main sx={{ paddingTop: 50 }}>
        {children}
      </main>
      <footer />
      <Global styles={() => ({ body: { overflowY: isVisible ? "hidden" : "scroll" } })} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
