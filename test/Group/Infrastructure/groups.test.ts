import app from '../../../src/app'
import request from 'supertest'

describe('POST /group', () => {
  it('Should save a group', async () => {
    const group = { groupName: 'Martelo', style: 'Rock' }

    const result = await request(app).post('/group').send(group)

    expect(result.body.groupName).toEqual(group.groupName)
    expect(result.statusCode).toEqual(200)
  })

  it('Should return an error if some of required fields are falsy', async () => {
    const group = { groupName: 'Martelo', style: null }

    await request(app).post('/group').send(group).expect(422)
  })
})
