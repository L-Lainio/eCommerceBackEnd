const request = require('supertest');
const app = require('../../../server'); // Make sure your server.js exports the 'app'

describe('GET /api/categories', () => {
  it('should return all categories', async () => {
    const res = await request(app).get('/api/categories');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

