import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MainView } from './components'
import store from './store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <MainView />
    </Provider>
  )
}

export default App
