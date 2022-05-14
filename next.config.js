// @ts-check

/**
 * @type {import('next').NextConfig}
 */

const { withPlugins } = require("next-compose-plugins")

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
})

//* custome plugins ---------------------------------

//* next default config ------------------------------
const removeConsoleOption =
    process.env.NODE_ENV === "development"
        ? false
        : {
              exclude: ["error"],
          }

const nextConfig = {
    pageExtensions: ["mdx", "tsx", "ts"],
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: removeConsoleOption,
    },
}

module.exports = withPlugins([withBundleAnalyzer], nextConfig)
