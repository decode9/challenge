import { MENU_SHOW, SET_ERROR, SHOW_LOADER } from './action-types'
import { actionObject } from '../../utils'

export const setMenuShow = (show) => actionObject(MENU_SHOW, show)
export const setLoaderShow = (show) => actionObject(SHOW_LOADER, show)
export const setError = (error) => actionObject(SET_ERROR, error)
