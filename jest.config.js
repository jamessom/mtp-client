module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/src/**/*.test.(js|jsx|ts|tsx)'],
  testURL: 'http://localhost/',
  collectCoverageFrom: ['**/src/**/*.{js,vue,ts}', '!**/src/*.{js,vue,ts}', '!**/node_modules/**'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
