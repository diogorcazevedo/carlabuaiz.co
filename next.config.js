/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/:path*",
        headers: [
          {key: "Access-Control-Allow-Credentials", value: "true"},
          {key: "Access-Control-Allow-Origin", value: "*"},
          {key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT"},
          {
            key: "Access-Control-Allow-Headers",
            value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/jewelry/checkout/:id',
        destination: '/order/checkout/:id', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/jewelry/collections_group/:id',
        destination: '/collections/landing_pages/:id', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/jewelry/collection/:id',
        destination: '/collections/:id', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/jewelry/category/:id',
        destination: '/categories/:id', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/jewelry/product/:id',
        destination: '/products/:id', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/jewelry/cart',
        destination: '/cart', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/jewelry/order',
        destination: '/order', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/jewelry/checkout/:id/:slug',
        destination: '/order/checkout/:id', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/jewelry/exception/:id',
        destination: '/order/exception/:id', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/jewelry/success/:id',
        destination: '/order/success/:id', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/store/product/:id',
        destination: '/products/:id', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig