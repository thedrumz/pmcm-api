import PersistenceError from '../../Shared/domain/exceptions/PersistenceError'
import Group, { GroupPrimitives } from '../domain/Group'
import { GroupRepository } from '../domain/GroupRepository'

class GroupCreate {
  private _groupRepository: GroupRepository

  public constructor(groupRepository: GroupRepository) {
    this._groupRepository = groupRepository
  }

  public run = async (group: GroupPrimitives): Promise<GroupPrimitives> => {
    const groupToSave = Group.fromPrimitives(group)
    try {
      await this._groupRepository.save(groupToSave)
    } catch (error) {
      throw new PersistenceError('Database error, group not created')
    }
    return groupToSave.toPrimitives()
  }
}

export default GroupCreate
