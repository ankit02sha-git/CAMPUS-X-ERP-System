import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }] },
  experimental: { serverActions: { bodySizeLimit: "6mb" } },
  serverExternalPackages: ["@libsql/client", "libsql"],
  poweredByHeader: false,
  webpack(config) {
    config.resolve.alias["@"] = path.join(root, "src");
    return config;
  },
  async headers() {
    return [{ source: "/(.*)", headers: [
      { key: "X-Frame-Options", value: "DENY" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    ]}];
  },
};
export default nextConfig;
