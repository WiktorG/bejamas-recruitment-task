export default {
  productWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100vh - 50px)",
    pt: "20px",
    pb: "50px",
  },
  imgWrapper: {
    width: ["1", "1", "2/5", null, 450],
    textAlign: ["center", "center", "right"],
  },
  img: {
    width: "1",
    maxWidth: "330px",
    maxHeight: "360px",
    objectFit: "contain",
  },
  infoWrapper: {
    display: "flex",
    flexDirection: "column",
    width: ["1", "1", "3/5", null, 650],
    pl: [0, 0, "2/5", 100],
  },
  tag: {
    textTransform: "uppercase",
    color: "secondary",
  },
  name: {
    variant: "heading",
    fontFamily: "body",
    fontWeight: "bold",
    color: "white",
    fontSize: 6,
    mt: "5px",
    mb: "25px",
  },
  description: {
    maxWidth: "410px",
    width: "1",
    my: 0,
  },
  price: {
    color: "white",
    fontWeight: "bold",
    fontSize: 4,
    transform: "translateX(-7px)",
    mt: "20px",
    mb: "15px",
  },
  button: {
    variant: "button.primary",
    fontSize: 1,
    py: "13px",
    px: "32px",
  },
}
