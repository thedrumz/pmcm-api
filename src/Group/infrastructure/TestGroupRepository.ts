import Group from '../domain/Group'
import { GroupRepository } from '../domain/GroupRepository'

class TestGroupRepository implements GroupRepository {
  public save = async (group: Group): Promise<void> => {
    await new Promise((resolve) => resolve(group))
  }
}

export default TestGroupRepository
