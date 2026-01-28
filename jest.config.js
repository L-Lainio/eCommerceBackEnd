module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js', '**/?(*.)+(spec|test).js'],
  collectCoverageFrom: [
    'routes/**/*.js',
    'models/**/*.js',
    '!**/node_modules/**',
  ],
  testTimeout: 10000,
  forceExit: true,
  clearMocks: true,
};
