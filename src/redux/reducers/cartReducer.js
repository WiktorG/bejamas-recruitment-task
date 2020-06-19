import {
  TOGGLE_CART,
  OPEN_CART,
  CLOSE_CART,
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
    default:
      return state
  }
}

export default cartReducer
