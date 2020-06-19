export const CART_BACKGROUND = "#220538"
export const CART_BORDER = "#F5F5F5"

export default {
  cartWrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "1",
    height: "100vh",
    zIndex: 1,
    "::before": {
      position: "absolute",
      left: 0,
      top: 0,
      content: "\"\"",
      display: "block",
      width: "1",
      height: "1",
      backdropFilter: "blur(5px)",
      zIndex: 0,
    },
  },
  cartContainer: {
    position: "relative",
    zIndex: 1,
    pt: "50px",
  },
  cart: {
    display: "block",
    listStyle: "none",
    width: "1",
    maxWidth: "281px",
    minHeight: "276px",
    backgroundColor: CART_BACKGROUND,
    borderColor: CART_BORDER,
    borderWidth: "3px",
    borderStyle: "solid",
    borderRadius: "4px",
    m: 0,
    p: 0,
    ml: "auto",
    mt: "18px",
    pt: "37px",
    pb: "23px",
  },
}
