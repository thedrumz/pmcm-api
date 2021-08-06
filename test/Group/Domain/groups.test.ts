import Group, { GroupPrimitives } from '../../../src/Group/domain/Group'
import ValidationError from '../../../src/Shared/domain/exceptions/ValidationError'

describe('Group entity', () => {
  it('Should create from primitives', () => {
    const primitives = { groupName: 'Martelo', style: 'Rock', image: 'http://domain.com/path/to/file.jpg' }

    Group.fromPrimitives(primitives as GroupPrimitives)
  })

  it.each(['groupName', 'style', 'image'])(
    'Should throw a ValidationError exception if required field %s is null',
    (field) => {
      const primitives = { groupName: 'Martelo', style: 'Rock', image: 'http://domain.com/path/to/file.jpg' }
      primitives[field] = null

      expect(() => Group.fromPrimitives(primitives as GroupPrimitives)).toThrow(ValidationError)
    },
  )
})
