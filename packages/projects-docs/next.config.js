const BASE_PATH = process.env.BASE_PATH;
const PREFIX_PATH = "";

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
    basePath: BASE_PATH || "",
    async redirects() {
      return [
        /*
          Redirects to avoid inital page
        */
        {
          source: "/",
          destination: "/learn/introduction/overview",
          permanent: true,
        },
        {
          source: "/tutorial/docker",
          destination: "/tutorial/getting-started-with-docker",
          permanent: true,
        },
        /*
           Redirects to support old website structure
           Migration between

           codesandbox.io/docs/projects
           codesandbox.io/docs/ios
           codesandbox.io/docs/vscode     =>  codesandbox.io/docs
           codesandbox.io/docs/
        */

        // Sandbox
        // ---------------------------
        {
          source: `${PREFIX_PATH}/overview`,
          destination: "/learn/introduction/overview",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/workspaces`,
          destination: "/learn/introduction/workspace",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/embedding`,
          destination: "/learn/sandboxes/embedding",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/git`,
          destination: "/learn/repositories/overview",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/uploading`,
          destination: "/learn/sandboxes/editors",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/importing`,
          destination: "/learn/getting-started/your-first-sandbox",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/importing`,
          destination: "/learn/getting-started/collaborate-share",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/tests`,
          destination: "/learn/sandboxes/tests",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/secrets`,
          destination: "/learn/sandboxes/secrets",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/deployment`,
          destination: "/learn/sandboxes/deployment",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/configuration`,
          destination: "/learn/sandboxes/configuration",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/preferences`,
          destination: "/learn/teams/preferences",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/templates`,
          destination: "/learn/sandboxes/templates",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/environment`,
          destination: "/learn/repositories/env",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/ci`,
          destination: "/learn/sandboxes/ci",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/custom-npm-registry`,
          destination: "/learn/sandboxes/npm",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/custom-npm-registry`,
          destination: "/learn/sandboxes/custom-npm-registry",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/explore`,
          destination: "/learn/integrations/explore",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/api-reference`,
          destination: "/learn/getting-started/your-first-sandbox",
          permanent: true,
        },

        // VS Code
        // ---------------------------
        {
          source: `${PREFIX_PATH}/vscode`,
          destination: "/learn/introduction/overview",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/vscode/overview`,
          destination: "/learn/introduction/overview",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/vscode/devtools`,
          destination: "/learn/repositories/devtools",
          permanent: true,
        },
        // TODO: Redirect to open the right tab
        {
          source: `${PREFIX_PATH}/vscode/open-branches`,
          destination: "/learn/repositories/editors",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/vscode/live-collaboration`,
          destination: "/learn/repositories/editors",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/vscode/review-prs`,
          destination: "/learn/repositories/editors",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/vscode/extensions`,
          destination: "/learn/repositories/editors",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/vscode/insiders`,
          destination: "/learn/repositories/editors",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/vscode/faq`,
          destination: "/faq",
          permanent: true,
        },
        // iOS
        {
          source: `${PREFIX_PATH}/ios`,
          destination: "/learn/introduction/overview",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/ios/overview`,
          destination: "/learn/introduction/overview",
          permanent: true,
        },
        // TODO: Redirect to open the right tab
        {
          source: `${PREFIX_PATH}/ios/sandbox`,
          destination: "/learn/getting-started/your-first-sandbox",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/ios/projects`,
          destination: "/learn/getting-started/your-first-repository",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/ios/shortcuts`,
          destination: "/learn/repositories/shortcuts",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/ios/faq`,
          destination: "/faq",
          permanent: true,
        },

        // Projects
        // ---------------------------
        {
          source: `${PREFIX_PATH}/projects`,
          destination: "/learn/repositories/overview",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/projects/learn/introduction/about-projects`,
          destination: "/learn/repositories/overview",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/projects/learn/getting-started/your-first-project`,
          destination: "/learn/getting-started/your-first-repository",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/projects/learn/getting-started/start-building`,
          destination: "/learn/getting-started/your-first-repository",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/projects/learn/getting-started/keep-working-on-vscode`,
          destination: "/learn/repositories/editors",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/projects/learn/getting-started/keep-working-on-ios`,
          destination: "/learn/repositories/editors",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/projects/learn/editor`,
          destination: "/learn/repositories/editors",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/projects/learn/editor/devtools`,
          destination: "/learn/repositories/devtools",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/projects/learn/editor/preview`,
          destination: "/learn/repositories/preview",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/projects/learn/editor/task`,
          destination: "/learn/repositories/task",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/projects/learn/editor/terminal`,
          destination: "/learn/repositories/terminal",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/projects/learn/editor/interactive-readme`,
          destination: "/learn/repositories/interactive-readme",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/projects/learn/editor/commandpalette`,
          destination: "/learn/repositories/commandpalette",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/projects/learn/editor/shortcuts`,
          destination: "/learn/repositories/shortcuts",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/projects/learn/setting-up/tasks`,
          destination: "/learn/repositories/tasks",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/projects/learn/setting-up/env`,
          destination: "/learn/repositories/env",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/projects/learn/setting-up/secrets`,
          destination: "/learn/repositories/secrets",
          permanent: true,
        },
        {
          source: `${PREFIX_PATH}/projects/learn/setting-up/limitations`,
          destination: "/learn/repositories/limitations",
          permanent: true,
        },
        // Fallback should be the last one to avoid conflicts
        {
          source: `${PREFIX_PATH}/projects/:path*`,
          destination: "/:path*",
          permanent: true,
        },
      ];
    },
  })
);
