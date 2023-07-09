import { takeLatest, call, put } from 'redux-saga/effects'
import { GET_FILES_DATA, actionObject, fetchService } from '../../utils'
import { setError, setLoaderShow } from '../actions'
import { GET_FILES, GET_FILES_ASYNC } from './action-types'

function * getFilesAsync ({ payload }) {
  try {
    yield put(setLoaderShow(true))
    const response = yield call(fetchService, `${GET_FILES_DATA}${(payload) ? `?fileName=${payload}` : ''}`, 'GET', payload)

    yield put(actionObject(GET_FILES_ASYNC, response))
    yield put(setError(null))
    yield put(setLoaderShow(false))
  } catch (error) {
    let message = error?.message
    yield put(setLoaderShow(false))
    if (error?.message?.includes('error')) {
      message = JSON.parse(message)?.error
      yield put(setError(message))
      return
    }
    yield put(setError('An error has ocurred, please contact support.'))
  }
}

export function * watchGetFile () {
  yield takeLatest(GET_FILES, getFilesAsync)
}
