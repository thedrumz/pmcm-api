import Group, { GroupPrimitives } from '../domain/Group'
import { GroupRepository } from '../domain/GroupRepository'

class GroupCreate {
  private _groupRepository: GroupRepository

  public constructor(groupRepository: GroupRepository) {
    this._groupRepository = groupRepository
  }

  public run = (group: GroupPrimitives): GroupPrimitives => {
    const groupToSave = Group.fromPrimitives(group)
    const result = this._groupRepository.save(groupToSave)
    return result.toPrimitives()
  }
}

export default GroupCreate
