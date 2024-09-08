/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {  
                protocol: 'http',
                hostname: '127.0.0.1',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'https',
                hostname: 'starfish-app-kq7kj.ondigitalocean.app'
            },
            {
                protocol: 'https',
                hostname: 'youtu.be'
            },
            {
                protocol: 'https',
                hostname: 'www.facebook.com'
            },
            {
                protocol: 'https',
                hostname: 'drive.google.com/drive/folders/1FCW4HYQdh5Kv4-NrN3-7acXAMrfe4UMt?usp=sharing'
            }
        ],
    },
}

module.exports = nextConfig
