module.exports = {
    verbose: true,
    preset: 'react-native',
    testEnvironment: 'jsdom',
    setupFiles: ['<rootDir>/jest.setup.js'],
    transformIgnorePatterns: ['/node_modules/*.js'],
    coveragePathIgnorePatterns: [
        '<rootDir>/index.js',
        '<rootDir>/App.js',
        '<rootDir>/.eslintrc.json',
        '/node_modules/',
        'jest.setup.js',
        'jest.config.js',
        'rn-cli.config.js',
    ],
    setupFilesAfterEnv: [
        '<rootDir>/__mocks__/react-navigation.js',
    ],
    collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10,
        },
    },
};
