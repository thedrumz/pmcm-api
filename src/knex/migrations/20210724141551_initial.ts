import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('groups', (table) => {
    table.string('id').primary()
    table.string('group_name', 255).notNullable()
    table.string('style', 100).notNullable()
    table.string('image', 255).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('groups')
}
