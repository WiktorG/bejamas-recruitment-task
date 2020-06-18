/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const ProductCard = ({ url, img, title, description }) => {
  return (
    <Link sx={styles.card} to={url}>
      <img src={img} sx={styles.image} />
      <Styled.h4 sx={styles.title}>{title}</Styled.h4>
      <Styled.p sx={styles.description}>{description}</Styled.p>
      <button sx={styles.button}>+</button>
    </Link>
  )
}

ProductCard.propTypes = {
  url: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
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
    textTransform: "uppercase",
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
