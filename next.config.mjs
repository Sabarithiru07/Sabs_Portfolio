/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // pure static site: `npm run build` writes ./out, deploy it anywhere
  trailingSlash: true,       // /portfolio/ -> portfolio/index.html works on every static host
  images: { unoptimized: true },
};
export default nextConfig;
