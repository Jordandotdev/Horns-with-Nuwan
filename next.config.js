/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {  
                protocol: 'http',
                hostname: '127.0.0.1',
            },
            {
                protocol: 'https',
                hostname: 'nuwan-backend-k4wxw.ondigitalocean.app',
            },
            {
                protocol: 'https',
                hostname: 'youtu.be'
            },
            {
                protocol: 'https',
                hostname: 'www.facebook.com'
            }
        ],
    },
}

module.exports = nextConfig
