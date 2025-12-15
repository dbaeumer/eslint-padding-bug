import stylistic from '@stylistic/eslint-plugin-js';

export default {
	plugins: {
		'@stylistic': stylistic
	},
	rules: {
		"@stylistic/padding-line-between-statements": ["error",
			{ blankLine: "never", prev: "if", next: "expression" },
			{ blankLine: "never", prev: "*", next: "if" },
			{ blankLine: "never", prev: "block-like", next: "*" },
			{ blankLine: "never", prev: "*", next: "block-like" },
			{ blankLine: "always", prev: "*", next: "function" },
			{ blankLine: "always", prev: "export", next: "*" },
			{ blankLine: "always", prev: "*", next: "export" },
			{ blankLine: "always", prev: "function", next: "*" },
			{ blankLine: "any", prev: "multiline-const", next: "*" },
			{ blankLine: "any", prev: "*", next: "multiline-const" },
		]
	}
}