/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: [
      'images.unsplash.com',
    ]
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}
