const dotenv = require("dotenv");
dotenv.config;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname:"i.imgur.com"
            }
        ]
    }
};

module.exports = nextConfig;
