const server = require('../server'); 
const request = require('supertest');
const db = require('../data/config');

// beforeEach(async () => {
//     await db.seed.run();
// })

afterEach(async () => {
    await db.destroy();
})

describe('Testing the classes endpoints', () => {
    test('GETS the classes', async () => {
        jest.setTimeout(30000);
        const res = await request(server).get('/classes')
        expect(res.statusCode).toBe(200)
    })
})