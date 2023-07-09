import { GET_FILES_ASYNC } from './action-types'

const initialState = {
  files: []
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FILES_ASYNC:
      return { ...state, files: payload }
    default:
      return state
  }
}

export default reducer
