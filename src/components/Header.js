/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

import { Container } from "../components/Grid"
import CartIcon from "../components/Common/CartIcon"

export default function Header() {
  return (
    <header sx={styles.header}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "1",
          maxWidth: [
            "100%",
            "552px",
            "732px",
            "910px",
            "1100px",
            "1320px",
            "1480px",
          ],
        }}
      >
        <Link to="/" sx={styles.mainLink}>
          JAM SHOP
        </Link>
        <CartIcon />
      </Container>
    </header>
  )
}

const styles = {
  header: {
    padding: "20px 0",
    position: "absolute",
    top: 0,
    left: 0,
    width: "1",
    background: "transparent",
    zIndex: "2",
  },
  mainLink: {
    variant: "text.link",
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
}
