/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	"root": true,
	"extends": [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/eslint-config-typescript/recommended",
		'plugin:vue/vue3-recommended'
	],
	"env": {
		"vue/setup-compiler-macros": true
	},
	rules: {
		"vue/html-indent": ["error", 'tab'],
		
		"vue/component-tags-order": ["error", {
			"order": ["template", "script", "style"]
		}],
		
		"vue/html-closing-bracket-spacing": ["error", {
			"startTag": "never",
			"endTag": "never",
			"selfClosingTag": "always"
		}],
		
		'vue/singleline-html-element-content-newline': 0
	},
}
