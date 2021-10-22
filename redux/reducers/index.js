import { combineReducers } from "redux"
import modeReducer  from "./mode.reducer"

const appReducer = combineReducers({
  modeReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout') {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

export default rootReducer