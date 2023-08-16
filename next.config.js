/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "platform-lookaside.fbsbx.com", //facebook
      "firebasestorage.googleapis.com", //firebase-storage
      "scontent-atl3-2.xx.fbcdn.net", //facebook
      "pbs.twimg.com", //twitter
    ],
  },
};

module.exports = nextConfig;
