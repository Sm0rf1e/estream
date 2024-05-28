/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'https://th.bing.com/th/id/OIP.cG92nUZ0cvyrv755YQZPOgAAAA?rs=1&pid=ImgDetMain',
    ]
  }
}

module.exports = nextConfig
