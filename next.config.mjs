/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Slike v public/ se spreminjajo redko, zato optimizirane različice hranimo 31 dni.
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;
