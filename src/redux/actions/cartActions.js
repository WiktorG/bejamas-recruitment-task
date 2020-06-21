export const TOGGLE_CART = "TOGGLE_CART"
export const OPEN_CART = "OPEN_CART"
export const CLOSE_CART = "CLOSE_CART"

export const PRODUCT_ADD_TO_CART = "PRODUCT_ADD_TO_CART"

export const toggleCart = () => ({ type: TOGGLE_CART })
export const openCart = () => ({ type: OPEN_CART })
export const closeCart = () => ({ type: CLOSE_CART })

export const productAddToCart = (product) => ({ type: PRODUCT_ADD_TO_CART, product })
