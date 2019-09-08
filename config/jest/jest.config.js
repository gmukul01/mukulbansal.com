module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.(ts|tsx)',
        '!<rootDir>/src/*.(ts|tsx)',
        '!<rootDir>/src/theme/**',
        '!<rootDir>/src/**/index.(ts|tsx)',
        '!<rootDir>/src/**/types/**',
        '!<rootDir>/node_modules/**'
    ],
    coverageDirectory: '<rootDir>/coverage/',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    roots: ['<rootDir>/src/'],
    rootDir: '../../',
    setupFiles: ['<rootDir>/config/jest/setup.js'],
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupAfterEnv.js'],
    testEnvironment: 'jsdom',
    testMatch: ['**/*.(spec|test).(ts|tsx)'],
    verbose: true,
    moduleNameMapper: {
        '^@styled': '<rootDir>/src/utils/styled',
        '^@test-utils': '<rootDir>/src/utils/test-utils',
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@constants(.*)$': '<rootDir>/src/constants$1',
        '^@containers(.*)$': '<rootDir>/src/containers$1',
        '^@store(.*)$': '<rootDir>/src/store$1',
        '^@theme(.*)$': '<rootDir>/src/theme$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1'
    }
};
