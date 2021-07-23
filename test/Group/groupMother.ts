import { Factory } from 'fishery'
import { name, datatype, music } from 'faker'
import Group from '../../src/Group/domain/Group'

interface IGroup {
  groupId?: string
  groupName?: string
  style?: string
}

const factory = Factory.define(() => ({
  groupId: datatype.uuid(),
  groupName: name.title(),
  style: music.genre(),
}))

export const generateGroup = (params?: IGroup): Group => {
  return <Group>factory.build(params)
}

export function generateGroupList(min = 0, max = 10): Array<Group> {
  const length = randQuantity(min, max)
  return <Array<Group>>factory.buildList(length)
}

const randQuantity = (min = 0, max = 10) => Math.random() * (max - min) + min
