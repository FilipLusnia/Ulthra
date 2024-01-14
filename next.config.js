await import("./src/env.js");

const config = {
	webpack: (config) => {
		const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.('.svg'))
		config.module.rules.push(
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
				use: ['@svgr/webpack'],
			},
		)
		fileLoaderRule.exclude = /\.svg$/i
		return config
	},
  	reactStrictMode: false,
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
};

export default config;