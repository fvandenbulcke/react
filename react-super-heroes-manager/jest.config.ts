// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
	moduleDirectories: ['node_modules', 'src'],
	setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
	testMatch: ['**/*.test.tsx'],
	collectCoverage: true,
	coverageReporters: ['json', 'html']
};
export default config;
