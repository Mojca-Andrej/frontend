/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Slike v public/ se spreminjajo redko, zato optimizirane različice hranimo 31 dni.
    minimumCacheTTL: 2678400,
  },
  async redirects() {
    return [
      // Obe izdaji romana sta zdaj na eni strani.
      { source: "/knjige/kavc-uciteljice-veronike-2022", destination: "/knjige/kavc-uciteljice-veronike", permanent: true },
      { source: "/knjige/kavc-uciteljice-veronike-2024", destination: "/knjige/kavc-uciteljice-veronike", permanent: true },
    ];
  },
};

export default nextConfig;
