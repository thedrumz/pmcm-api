import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('groups').del()

  // Inserts seed entries
  await knex('groups').insert([
    {
      id: '5dbda1e9-6556-4812-af52-63ceb38af5b9',
      group_name: 'Martelo',
      style: 'rock',
    },
  ])
}
