import renderer from 'react-test-renderer'
import Loader from './'

it('render loader', () => {
  const component = renderer.create(
    <Loader />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
