module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/backend/src', '<rootDir>/backend/tests', '<rootDir>/shared/packages'],
  testMatch: [
    '**/__tests__/**/*.ts',
    '**/*.(test|spec).ts'
  ],
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
      isolatedModules: true
    }]
  },
  collectCoverageFrom: [
    'backend/src/**/*.ts',
    'shared/packages/*/src/**/*.ts',
    '!backend/src/**/*.d.ts',
    '!backend/src/**/index.ts',
    '!backend/src/**/*.interface.ts',
    '!backend/src/**/*.type.ts',
    '!backend/src/**/*.config.ts',
    '!backend/src/**/migrations/**',
    '!shared/packages/*/src/**/index.ts'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text',
    'lcov',
    'html',
    'json-summary'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/backend/src/$1',
    '^@domain/(.*)$': '<rootDir>/backend/src/domain/$1',
    '^@application/(.*)$': '<rootDir>/backend/src/application/$1',
    '^@infrastructure/(.*)$': '<rootDir>/backend/src/infrastructure/$1',
    '^@presentation/(.*)$': '<rootDir>/backend/src/presentation/$1',
    '^@shared/(.*)$': '<rootDir>/backend/src/shared/$1',
    '^@tests/(.*)$': '<rootDir>/backend/tests/$1',
    '^@psp/shared-core$': '<rootDir>/shared/packages/core/src',
    '^@psp/shared-events$': '<rootDir>/shared/packages/events/src',
    '^@psp/shared-database$': '<rootDir>/shared/packages/database/src'
  },
  setupFilesAfterEnv: [
    '<rootDir>/backend/tests/setup.ts'
  ],
  globalSetup: '<rootDir>/backend/tests/globalSetup.ts',
  globalTeardown: '<rootDir>/backend/tests/globalTeardown.ts',
  testTimeout: 10000,
  verbose: true,
  detectOpenHandles: true,
  forceExit: true,
  clearMocks: true,
  restoreMocks: true,
  resetMocks: true,
  maxWorkers: '50%',
  
  // Performance optimizations
  maxConcurrency: 5,
  cache: true,
  cacheDirectory: '<rootDir>/.jest/cache',
  
  // Error handling
  bail: false,
  errorOnDeprecated: true,
  
  // Reporter configuration
  reporters: [
    'default',
    [
      'jest-junit', 
      {
        outputDirectory: 'coverage',
        outputName: 'junit.xml',
        suiteName: 'PSP Platform Tests'
      }
    ]
  ]
};
