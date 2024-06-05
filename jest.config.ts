import type {Config} from 'jest';
export default async (): Promise<Config> => {
  return {
      preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/__tests__/**/*.+(js|ts|tsx)"],
  verbose: true,
  forceExit: true,
  collectCoverage: true,
  resolver: 'jest-ts-webcompat-resolver',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
      esModuleInterop: true,
    },
  },
  moduleNameMapper: {
    '^lowdb/node$': './node_modules/lowdb/lib/adapters/node', // Map 'lowdb/node' to the actual module path
  },
  };
};