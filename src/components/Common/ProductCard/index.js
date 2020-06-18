/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const ProductCard = () => {
  return (
    <Link sx={styles.card}>
      123
    </Link>
  )
}

export default ProductCard

const styles = {
  card: {
    display: "flex",
    backgroundColor: "background.card",
    width: 265,
    height: 273,
    padding: "32px 20px",
    borderColor: "lightish",
    borderWidth: 3,
    borderStyle: "solid",
  },
}
