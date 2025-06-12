/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, //Set appDir: false if your project is 
    // based on the pages directory and you want to avoid 
    // any issues related to the new App Router during deployment.
  },
};

module.exports = nextConfig;
