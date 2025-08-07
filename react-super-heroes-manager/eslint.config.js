import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';
import typeScriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import typeScriptParser from '@typescript-eslint/parser';

export default tseslint.config([
	globalIgnores(['node_modules', 'dist', 'coverage']),
	{
		files: ['**/*.{js,ts,tsx}'],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs['recommended-latest'],
			reactRefresh.configs.vite,
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: {
				...globals.browser,
				browser: true,
				es2021: true,
			},
			parser: typeScriptParser,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: {
					jsx: true
				},
				sourceType: 'module',
			},
		},
		plugins: {
			'@typescript-eslint': typeScriptEslintPlugin,
			react: reactPlugin
		},
		rules: {
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			indent: [
				'error',
				'tab'
			],
			'linebreak-style': [
				'error',
				'unix'
			],
			quotes: [
				'error',
				'single'
			],
			semi: [
				'error',
				'always'
			],
			'react/react-in-jsx-scope': 'off', // Not needed in React 18
			'react/function-component-definition': [
				2,
				{ namedComponents: 'arrow-function' },
			],
		},
		settings: {
			react: {
				version: '19.1.0', // Specify React 19 version
			},
		},
	},
]);
