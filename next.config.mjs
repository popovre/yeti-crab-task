/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `@import "@/app/_mixins.scss";`,
  },
};

export default nextConfig;
