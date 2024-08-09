import { paraglide } from '@inlang/paraglide-next/plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `
      @import "@/styles/breakpoints.scss";
    `,
  },

  images: {
    deviceSizes: [768, 1024, 3840],
    imageSizes: [32, 128, 384],
    minimumCacheTTL: 60,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    return config
  },

  rewrites: () => {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.winlux.com/:path*',
      },
    ]
  },
};

export default (paraglide({
  paraglide: {
    project: './src/libs/localization/project.inlang',
    outdir: './src/libs/localization/paraglide',
  },
  ...nextConfig,
}))
