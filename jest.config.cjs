module.exports = {
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.test.js'],
  // The Wrangler suite needs the local server started by test:e2e:wrangler.
  testPathIgnorePatterns: process.env.JEST_TEST_FILE ? [] : ['/e2e\\.wrangler\\.test\\.js$'],
  transform: {
    '^.+\\.js$': ['babel-jest', {
      presets: [['@babel/preset-env', { targets: { node: 'current' } }]]
    }]
  },
  verbose: true,
  testEnvironment: 'node'
};
