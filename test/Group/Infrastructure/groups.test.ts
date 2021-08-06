import app from '../../../src/app'
import request from 'supertest'

describe('POST /group', () => {
  it('Should save a group', async () => {
    const group = { groupName: 'Martelo', style: 'Rock', image: `${__dirname}/files/image_200_kb.jpg` }

    const result = await request(app)
      .post('/group')
      .field('groupName', group.groupName)
      .field('style', group.style)
      .attach('image', group.image)

    expect(result.body.groupName).toEqual(group.groupName)
    expect(result.body.image).not.toBe('')
    expect(result.statusCode).toEqual(200)
  })

  it('Should return an error if some of required fields are falsy', async () => {
    const group = { groupName: 'Martelo', image: `${__dirname}/files/image_200_kb.jpg` }

    const result = await request(app).post('/group').field('groupName', group.groupName).attach('image', group.image)

    expect(result.status).toBe(422)
  })
})
