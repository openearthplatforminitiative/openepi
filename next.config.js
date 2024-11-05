/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true,
		domains: ["cdn.sanity.io"],
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ["@svgr/webpack"],
		});
		return config;
	},
};

module.exports = nextConfig;
