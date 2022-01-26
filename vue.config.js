// vue.config.js

const path = require('path');

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
	chainWebpack: config => {
		config.module
			.rule('vue')
			.use('vue-loader')
			.tap(options => {
				options.keep_classnames = true;
				return options
			})
	},

	configureWebpack: {
		resolve: {
			alias: {
				"@": path.resolve(__dirname, 'src')
			},
			extensions: ['.js', '.vue', '.json']
		}
	}
}
