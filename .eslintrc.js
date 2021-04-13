module.exports = {
	env: {
		browser: true
	},
	globals: {
		describe: false,
		it: false,
		expect: false,
		server: false,
		before: false,
		after: false,
		enzyme: false,
		sinon: false,
		mockData: false
	},
	plugins: ['prettier'],
	extends: ['airbnb', 'prettier', 'prettier/react'],
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 2018,
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		'react/prop-types': 0,
		'import/extensions': 0,
		'linebreak-style': 0,
		'no-console': [
			'error',
			{
				allow: ['log', 'error', 'warn']
			}
		],
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/interactive-supports-focus': 0,
		'comma-dangle': 0,
		semi: 0,
		indent: 0,
		'no-tabs': 0,
		'max-len': 0,
		'arrow-parens': [2, 'as-needed'],
		'import/no-unresolved': 'webpack',
		'class-methods-use-this': 0,
		'no-param-reassign': 0,
		'new-cap': 0,
		'import/prefer-default-export': 0,
		'import/no-named-as-default': 0,
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-one-expression-per-line': 0,
		'jsx-a11y/anchor-is-valid': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'jsx-a11y/aria-role': 0,
		'no-underscore-dangle': [
			'error',
			{ allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__', '_id'] }
		],
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				tabWidth: 4,
				semi: false,
				singleQuote: true,
				bracketSpacing: true,
				trailingComma: 'none',
				proseWrap: 'never'
			}
		]
	},
	overrides: [
		{
			files: ['config/**/*', 'clear-cache.js', 'postcss.config.js'],
			rules: {
				'import/no-extraneous-dependencies': 0
			}
		}
	],
	settings: {
		react: {
			pragma: 'React',
			version: '16.6.3'
		}
	}
}
