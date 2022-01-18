// vue.config.js

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
				"@": path.resolve(__dirname, vueSrc)
			},
			extensions: ['.js', '.vue', '.json']
		}
	}
}
