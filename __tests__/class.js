const server = require('../server'); 
const request = require('supertest');
const db = require('../data/config');

beforeEach(async () => {
    await db.seed.run();
})

afterAll(async () => {
    db.destroy();
})

describe('Testing the classes endpoints', () => {
    it('GETS the classes', async () => {
        jest.setTimeout(30000);
        const res = await request(server).get("/classes")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe('application/json')
    })
})