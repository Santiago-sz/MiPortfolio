/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Asegúrate de que la ruta base coincida con tu repositorio de GitHub
  // Si tu repositorio se llama username.github.io, deja esto como ''
  // Si es un repositorio normal como username.github.io/portfolio, usa '/portfolio'
  basePath: '',
  trailingSlash: true,
};

export default nextConfig;
