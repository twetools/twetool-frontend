import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // Fix TypeORM React Native dependency resolution issues
    // TypeORM tries to load React Native drivers that we don't need for Node.js/Next.js
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "react-native-sqlite-storage": false,
      "react-native": false,
      "@sap/hana-client": false,
      "hdb-pool": false,
      oracledb: false,
      "pg-native": false,
      "pg-query-stream": false,
      "sql.js": false,
      sqlite3: false,
      "better-sqlite3": false,
      ioredis: false,
      redis: false,
      "typeorm-aurora-data-api-driver": false,
      "pg-cloudflare": false,
      "ts-node": false,
    };

    // Ignore specific TypeORM drivers that are not needed
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "react-native-sqlite-storage": false,
        "react-native": false,
      };
    }

    // Add specific handling for TypeORM's conditional require() calls
    config.externals = config.externals || [];
    if (isServer) {
      config.externals.push({
        "react-native-sqlite-storage": "commonjs react-native-sqlite-storage",
        "react-native": "commonjs react-native",
        "@sap/hana-client": "commonjs @sap/hana-client",
        "hdb-pool": "commonjs hdb-pool",
        oracledb: "commonjs oracledb",
        "pg-native": "commonjs pg-native",
        "pg-query-stream": "commonjs pg-query-stream",
        "sql.js": "commonjs sql.js",
        sqlite3: "commonjs sqlite3",
        "better-sqlite3": "commonjs better-sqlite3",
        ioredis: "commonjs ioredis",
        redis: "commonjs redis",
        "typeorm-aurora-data-api-driver":
          "commonjs typeorm-aurora-data-api-driver",
        "pg-cloudflare": "commonjs pg-cloudflare",
      });
    }

    return config;
  },

  // Ensure environment variables are properly loaded
  env: {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
  },
};

export default nextConfig;
