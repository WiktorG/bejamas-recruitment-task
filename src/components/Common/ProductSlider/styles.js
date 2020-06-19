export default {
  sliderWrapper: {
    position: "relative",
    px: ["50px", null, "20px", null, 0],
    marginTop: [40, 64],
  },
  arrow: {
    height: "auto",
    width: ["50px", null, null, "55px", null, "60px", "65px"],
  },
  arrowLeftWrapper: {
    background: "none",
    border: "none",
    webkitAppearance: "none",
    position: "absolute",
    right: "100%",
    top: "50%",
    transform: ["translate(45px, -50%)", null, "translate(35px, -50%)", null, "translate(-10px, -50%)", "translate(-15px, -50%)"],
    cursor: "pointer",
    outline: "none",
  },
  arrowRightWrapper: {
    background: "none",
    border: "none",
    webkitAppearance: "none",
    position: "absolute",
    left: ["100%"],
    top: "50%",
    transform: ["translate(-45px, -50%)", null, "translate(-35px, -50%)", null, "translate(10px, -50%)", "translate(15px, -50%)"],
    cursor: "pointer",
    outline: "none",
  },
}
