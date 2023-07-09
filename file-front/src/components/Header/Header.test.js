import renderer from 'react-test-renderer'
import Header from './'

it('render header', () => {
  const component = renderer.create(
    <Header />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
