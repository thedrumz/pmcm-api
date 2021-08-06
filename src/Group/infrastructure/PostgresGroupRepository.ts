import Group from '../domain/Group'
import { GroupRepository } from '../domain/GroupRepository'
import knex from '../../knex/knex'

class PostgresGroupRepository implements GroupRepository {
  public save = async (group: Group): Promise<void> => {
    await knex('groups').insert({
      id: group.groupId(),
      group_name: group.groupName(),
      style: group.style(),
      image: group.image(),
    })
  }
}

export default PostgresGroupRepository
