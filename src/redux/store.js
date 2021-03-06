/* eslint-disable no-underscore-dangle */
import { createStore, compose } from "redux"

import rootReducer from "./reducers/rootReducer"

// I leave it so that you can check it in your browser on production :)
const devTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__() : compose

const store = createStore(
  rootReducer,
  compose(
    devTools,
  ),
)

export default store
