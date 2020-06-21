export default {
  card: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    alignContent: "center",
    backgroundColor: "background.card",
    color: "inherit",
    textDecoration: "none",
    width: ["95%", null, null, "100%"],
    maxWidth: ["265px", null, "240px", null, null, "265px"],
    height: "273px",
    mx: "auto",
    px: "20px",
    pt: "32px",
    pb: "40px",
    borderColor: "border.card",
    borderWidth: "3px",
    borderRadius: "2px",
    borderStyle: "solid",
  },

  img: {
    maxHeight: "92px",
    mx: "auto",
  },

  name: {
    fontFamily: "body",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAling: "left",
    marginTop: "15px",
    marginBottom: "10px",
  },

  excerpt: {
    margin: 0,
    lineHeight: 1.2,
    fontSize: 1,
    pr: "25px",
  },

  button: {
    outline: "none",
    position: "absolute",
    display: "block",
    variant: "button.primary",
    fontSize: 6,
    padding: 0,
    maxWidth: "44px",
    width: "100%",
    height: "44px",
    lineHeight: "44px",
    borderRadius: "22px",
    right: "7px",
    bottom: "7px",
  },

}
