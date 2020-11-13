const server = require('../server'); 
const request = require('supertest');
const db = require('../data/config');
const { default: expectCt } = require('helmet/dist/middlewares/expect-ct');

beforeEach(async () => {
    await db.seed.run();
})

afterAll(async () => {
    await db.destroy();
})

describe('Testing the classes endpoints', () => {
    it('GETS the classes', async () => {
        const res = await request(server).get('/classes')
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe('application/json')
    })
})