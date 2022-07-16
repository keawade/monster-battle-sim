import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  collectCoverage: true,
  testMatch: ['test/**/*.spec.ts'],
};

export default config;
