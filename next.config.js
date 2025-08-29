const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer, webpack }) {
    // SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // TypeORM optimization for Next.js
    // Exclude unnecessary database drivers and React Native dependencies
    if (!isServer) {
      // Client-side: completely exclude these modules
      config.resolve.fallback = {
        ...config.resolve.fallback,
        // React Native dependencies
        "react-native-sqlite-storage": false,
        "react-native": false,

        // Database drivers not needed for our MSSQL setup
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

        // Build tools
        "ts-node": false,

        // Node.js specific modules
        fs: false,
        net: false,
        tls: false,
      };
    }

    // Server-side: externalize these modules so they're not bundled
    if (isServer) {
      config.externals = config.externals || [];

      // Add modules that should be external (not bundled)
      const externalModules = [
        "react-native-sqlite-storage",
        "react-native",
        "@sap/hana-client",
        "hdb-pool",
        "oracledb",
        "pg-native",
        "pg-query-stream",
        "sql.js",
        "sqlite3",
        "better-sqlite3",
        "ioredis",
        "redis",
        "typeorm-aurora-data-api-driver",
        "pg-cloudflare",
      ];

      externalModules.forEach((module) => {
        config.externals.push({
          [module]: `commonjs ${module}`,
        });
      });
    }

    // Add specific ignore plugin for React Native modules
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^react-native/,
        contextRegExp: /typeorm/,
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: /^react-native-sqlite-storage$/,
      })
    );

    return config;
  },

  // Environment variables for TypeORM
  env: {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
  },

  // External packages for server components
  serverExternalPackages: ["typeorm"],
};

module.exports = nextConfig;
