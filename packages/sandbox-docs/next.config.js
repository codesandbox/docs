const withNextra = require("nextra")({
  theme: "codesandbox-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
});

const withTM = require("next-transpile-modules")(["../../shared-components"]);

module.exports = withTM(
  withNextra({
    i18n: {
      locales: ["en-US"],
      defaultLocale: "en-US",
    },
  })
);
