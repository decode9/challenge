import {
  MENU_SHOW,
  SET_ERROR,
  SHOW_LOADER
} from './action-types'

const initialState = {
  showMenu: false,
  showLoader: false,
  error: null
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_LOADER:
      return { ...state, showLoader: payload }
    case MENU_SHOW:
      return { ...state, showMenu: payload }
    case SET_ERROR:
      return { ...state, error: payload }
    default:
      return state
  }
}

export default reducer
