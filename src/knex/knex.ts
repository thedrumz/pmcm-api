import config from './knexfile'
import knex from 'knex'

const environment = process.env.NODE_ENV || 'dev'

export default knex(config[environment])
