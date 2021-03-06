export default {
  productWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100vh - 50px)",
    pt: "20px",
    pb: "50px",
    fontFamily: "product",
  },

  productRow: {
    justifyContent: "center",
    alignItems: "center",
    width: "1",
  },

  imgWrapper: {
    width: ["1", "1", "1/2"],
    textAlign: ["center", "center", "right"],
  },

  img: {
    width: "1",
    maxWidth: ["200px", "230px", "250px", "340px"],
    maxHeight: "360px",
    objectFit: "contain",
  },

  infoWrapper: {
    display: "flex",
    textAlign: ["center", "center", "left"],
    flexDirection: "column",
    width: ["1", "1", "1/2"],
    mt: ["20px", null, null, 0],
    pl: ["20px", 0, 0, "55px"],
    pr: ["20px", 0],
  },

  tag: {
    textTransform: "uppercase",
    color: "secondary",
    fontSize: [0, null, null, null, 1],
  },

  name: {
    variant: "heading",
    fontFamily: "inherit",
    fontWeight: "bold",
    color: "white",
    fontSize: [3, null, 4, null, 5],
    mt: "10px",
    mb: ["15px", null, null, "25px"],
  },

  description: {
    fontFamily: "inherit",
    maxWidth: "410px",
    width: "1",
    my: 0,
    mx: ["auto", null, "unset"],
    fontSize: [1, null, 2, null, "18px"],
    lineHeight: 1.35,
  },

  price: {
    fontFamily: "inherit",
    color: "white",
    fontWeight: "bold",
    fontSize: [2, null, null, "22px"],
    transform: [null, null, "translateX(-11px)"],
    mt: ["15px", null, null, "20px"],
    mb: ["15px", null, null, "20px"],
  },

  button: {
    variant: "button.primary",
    fontFamily: "product",
    fontSize: "13px",
    textTransform: "uppercase",
    py: "13px",
    px: "32px",
    mx: ["auto", null, "unset"],
  },

}
