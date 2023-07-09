import { actionObject } from '../../utils'
import { GET_FILES } from './action-types'

export const getFiles = (name) => actionObject(GET_FILES, name)
