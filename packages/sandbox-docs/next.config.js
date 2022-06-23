const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
});

const withTM = require("next-transpile-modules")(["../../layout"]);

module.exports = withTM(
  withNextra({
    i18n: {
      locales: ["en-US"],
      defaultLocale: "en-US",
    },
  })
);
