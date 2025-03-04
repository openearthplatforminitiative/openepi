import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	output: "export",
	images: {
		unoptimized: true,
		domains: ["cdn.sanity.io"],
	},
	experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
