/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    transpilePackages: ['@shared/components']
  }
}

module.exports = nextConfig