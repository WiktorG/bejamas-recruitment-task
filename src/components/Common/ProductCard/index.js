/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"

import DumyImg from "../../../images/products/dumy.svg"

const ProductCard = () => {
  return (
    <Link sx={styles.card} to="/">
      <img src={DumyImg} sx={styles.image} />
      <Styled.h4 sx={styles.title}>Dummy product</Styled.h4>
      <Styled.p sx={styles.description}>Something that you trully need, but haven’t know about it yet</Styled.p>
      <button sx={styles.button}>+</button>
    </Link>
  )
}

export default ProductCard

const styles = {
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
    width: "100%",
    maxWidth: ["265px", null, "240px", null, null, "265px"],
    height: "273px",
    mx: "auto",
    padding: "32px 20px",
    borderColor: "gray",
    borderWidth: 3,
    borderStyle: "solid",
  },
  image: {
    maxHeight: "92px",
    mx: "auto",
  },
  title: {
    fontFamily: "body",
    fontWeight: "bold",
    textAling: "left",
    marginTop: "37px",
    marginBottom: "10px",
  },
  description: {
    margin: 0,
    lineHeight: 1.2,
    fontSize: 1,
    paddingRight: "25px",
  },
  button: {
    position: "absolute",
    display: "block",
    variant: "button.primary",
    fontSize: 6,
    padding: 0,
    maxWidth: "44px",
    width: "100%",
    height: "44px",
    borderRadius: "22px",
    right: "7px",
    bottom: "7px",
  },
}
