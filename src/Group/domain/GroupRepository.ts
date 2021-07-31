import Group from './Group'

export interface GroupRepository {
  save(group: Group): Promise<void>
}
