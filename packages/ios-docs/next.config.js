const BASE_PATH = process.env.BASE_PATH;

const withNextra = require("nextra")({
  theme: "codesandbox-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
  images: {
    quality: 90,
  },
});

const withTM = require("next-transpile-modules")(["../../shared-components"]);

module.exports = withTM(
  withNextra({
    i18n: {
      locales: ["en-US"],
      defaultLocale: "en-US",
    },
    basePath: BASE_PATH || "",
  })
);
