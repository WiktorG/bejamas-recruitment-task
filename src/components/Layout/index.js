/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { Global } from "@emotion/core"

import { cart as cartSelector } from "./../../redux/selectors/cartSelectors"

import Header from "../Header"

export default function Layout({ children }) {
  const { isVisible } = useSelector(cartSelector)

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
