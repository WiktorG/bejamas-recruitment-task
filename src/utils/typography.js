import Typography from "typography"

const typography = new Typography({
  googleFonts: [{
    name: "Roboto",
    styles: [
      "400",
      "700",
    ],
  }],
})

typography.injectStyles()

export default typography
