import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false,
  generateEtags: false,
  compress: true,
  poweredByHeader: false,

  // 环境变量配置
  env: {
    NEXT_PUBLIC_BASE_URL:
      process.env.NEXT_PUBLIC_BASE_URL || "https://n8n-res.0x2a.top",
  },
};

export default nextConfig;
