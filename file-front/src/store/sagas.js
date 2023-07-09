import { all, fork } from 'redux-saga/effects'
import { watchGetFile } from './file/saga'

function * sagas () {
  yield all([
    fork(watchGetFile)
  ])
}

export default sagas
