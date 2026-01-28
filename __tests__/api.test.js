const request = require('supertest');
const app = require('../server'); // Import your app from server.js

describe('🛒 eCommerce API Smoke Test', () => {
  
  // Test 1: Get Categories
  it('GET /api/categories should return data', async () => {
    const res = await request(app).get('/api/categories');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // Test 2: Get Products
  it('GET /api/products should return 200 OK', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toEqual(200);
  });
});
