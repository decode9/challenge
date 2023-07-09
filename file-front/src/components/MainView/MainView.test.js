/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer'
import MainView from './'
import { Provider } from 'react-redux'
import store from '../../store'

it('render MainView', () => {
  const component = renderer.create(
    <Provider store={store}>
      <MainView />
    </Provider>
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
