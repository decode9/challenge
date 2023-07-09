/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer'
import Table from './'

it('render Table', () => {
  const component = renderer.create(
    <Table />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
