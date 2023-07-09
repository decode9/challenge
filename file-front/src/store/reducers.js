import { combineReducers } from '@reduxjs/toolkit'
import file from './file/reducer'
import intermitence from './intermitence/reducer'

const reducers = combineReducers({
  file,
  intermitence
})

export default reducers
