/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["cdn.sanity.io"],
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack'],
		});
		return config;
	},
};

module.exports = nextConfig;
