export default {
  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    textDecoration: "none",
    transform: ["translateX(-15px)", null, "translateX(0)"],
  },

  icon: {
    m: 0,
    transition: "all 0.15s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
    "&:active": {
      transform: "scale(1.1)",
    },
  },

  number: {
    position: "absolute",
    right: "-4px",
    top: "7px",
    textAlign: "center",
    lineHeight: "13px",
    display: "block",
    fontSize: "9px",
    height: "13px",
    width: "12px",
    borderRadius: "6px",
    backgroundColor: "background.badgeEmpty",
    color: "white",
  },

  angle: {
    position: "absolute",
    right: "0",
    m: 0,
    transition: "all 0.2s ease-in-out",
  },
}
