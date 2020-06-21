import {
  TOGGLE_CART,
  OPEN_CART,
  CLOSE_CART,
  PRODUCT_ADD_TO_CART,
} from "./../actions/cartActions"

const initialState = {
  isVisible: false,
  items: [],
}

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        isVisible: !state.isVisible,
      }
    case OPEN_CART:
      return {
        ...state,
        isVisible: true,
      }
    case CLOSE_CART:
      return {
        ...state,
        isVisible: false,
      }
    case PRODUCT_ADD_TO_CART:
      return {
        ...state,
        items: [
          ...state.items,
          action.product,
        ],
      }
    default:
      return state
  }
}

export default cartReducer
