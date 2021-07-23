import Group from '../domain/Group'
import { GroupRepository } from '../domain/GroupRepository'

class TestGroupRepository implements GroupRepository {
  public save = (group: Group): Group => {
    return group
  }
}

export default TestGroupRepository
