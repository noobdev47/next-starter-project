import thunk from "redux-thunk"
import rootReducer from "./reducers"
import { createWrapper } from "next-redux-wrapper"
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// )

const makeStore = context => createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export const wrapper = createWrapper(makeStore, { debug: true })
