export default {
  cartWrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "1",
    height: "100vh",
    zIndex: 1,
    fontFamily: "product",
  },

  cartOverlay: {
    position: "absolute",
    left: 0,
    top: 0,
    display: "block",
    width: "1",
    height: "1",
    backdropFilter: "blur(10px)",
    zIndex: 0,
  },

  cartContainer: {
    position: "relative",
    zIndex: 1,
    pt: "50px",
  },

  cart: {
    position: "relative",
    display: "block",
    listStyle: "none",
    width: "1",
    maxWidth: "281px",
    minHeight: "276px",
    backgroundColor: "background.cart",
    borderColor: "border.cart",
    borderWidth: "3px",
    borderStyle: "solid",
    borderRadius: "4px",
    transform: ["translateX(-15px)", "transformX(0)", null, "translateX(10px)", "translateX(50px)"],
    m: 0,
    p: 0,
    ml: "auto",
    mt: ["25px", null, null, "18px"],
    pt: "37px",
    pb: "58px",
  },

  cartItems: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    margin: 0,
    maxHeight: ["320px", null, null, "380px"],
    overflowY: "scroll",
  },

  cartItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 0,
    fontWeight: "bold",
    color: "white",
    pl: "18px",
    pr: "28px",
  },

  productImg: {
    width: "30px",
    mb: 0,
  },

  productName: {
    width: "1",
    textAlign: "left",
    paddingLeft: "14px",
    textTransform: "uppercase",
    fontFamily: "body",
  },

  button: {
    position: "absolute",
    right: 0,
    bottom: 0,
    variant: "button.primary",
    fontFamily: "product",
    fontSize: "13px",
    py: "7px",
    px: "30px",
    mr: "28px",
    mb: "20px",
    borderRadius: 0,
    textTransform: "uppercase",
  },
}
