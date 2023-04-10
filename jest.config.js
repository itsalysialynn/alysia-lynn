module.exports = {
  coverageDirectory: 'reports',
  coverageReporters: ['text', 'cobertura'],
  preset: 'ts-jest',
  reporters: ['default', ['jest-junit', { outputDirectory: 'reports', outputName: 'jest.xml' }]],
  testEnvironment: 'jsdom',
};
