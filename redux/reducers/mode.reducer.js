import { TOGGLEMODE } from "../actionTypes"
import { HYDRATE } from "next-redux-wrapper"

const initialState = {
  mode: 'light'
}

const modeReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case HYDRATE:
      const stateDiff = diff(state, action.payload)
      const wasBumpedOnClient = stateDiff?.page?.[0]?.endsWith('X') // or any other criteria
      return {
        ...state,
        ...action.payload,
        page: wasBumpedOnClient ? state.page : action.payload.page, // keep existing state or use hydrated
      };
    case TOGGLEMODE:
      return {
        ...state,
        mode: payload
      }

    default: return state
  }
}

export default modeReducer