import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testPathIgnorePatterns: ['node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(spec|test)?(s).+(ts|tsx)'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',

    'scss(.*)$': '<rootDir>/src/scss/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/__tests__/.setup.ts'],
};

export default config;
