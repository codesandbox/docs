const BASE_PATH = process.env.BASE_PATH;
const PREFIX_PATH = "";

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  images: {
    quality: 90,
  },
});

module.exports = withNextra({
  basePath: BASE_PATH || "",
  transpilePackages: ["../../shared-components"],
  async redirects() {
    return [
      /*
          Redirects to avoid inital page
        */
      {
        source: "/",
        destination: "/learn",
        permanent: true,
      },
      {
        source: "/learn/introduction/overview",
        destination: "/learn",
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
        destination: "/learn/introduction",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/workspaces`,
        destination: "/learn/teams/workspace",
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
        destination: "/learn/sandboxes/your-first-sandbox",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/importing`,
        destination: "/learn/repositories/collaborate-share",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/tests`,
        destination: "/learn/browser-sandboxes/tests",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/secrets`,
        destination: "/learn/repositories/secrets",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/deployment`,
        destination: "/learn/sandboxes/deployment",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/configuration`,
        destination: "/learn/browser-sandboxes/configuration",
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
        destination: "/learn/ci",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/custom-npm-registry`,
        destination: "/learn/sandboxes/custom-npm-registry",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/custom-npm-registry`,
        destination: "/learn/sandboxes/custom-npm-registry",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/explore`,
        destination: "/learn/explore",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/api-reference`,
        destination: "/learn/sandboxes/your-first-sandbox",
        permanent: true,
      },

      // VS Code
      // ---------------------------
      {
        source: `${PREFIX_PATH}/vscode`,
        destination: "/learn/editors/vscode/overview",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/vscode/overview`,
        destination: "/learn/editors/vscode/overview",
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
        destination: "/learn/editors/vscode/overview",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/vscode/live-collaboration`,
        destination: "/learn/editors/vscode/overview",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/vscode/review-prs`,
        destination: "/learn/editors/vscode/overview",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/vscode/extensions`,
        destination: "/learn/editors/vscode/overview",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/vscode/insiders`,
        destination: "/learn/editors/vscode/overview",
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
        destination: "/learn/editors/ios/overview",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/ios/overview`,
        destination: "/learn/editors/ios/overview",
        permanent: true,
      },
      // TODO: Redirect to open the right tab
      {
        source: `${PREFIX_PATH}/ios/sandbox`,
        destination: "/learn/sandboxes/your-first-sandbox",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/ios/projects`,
        destination: "/learn/repositories/your-first-repository",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/ios/shortcuts`,
        destination: "/learn/editors/web/shortcuts",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/ios/faq`,
        destination: "/faq",
        permanent: true,
      },

      // Other redirects
      {
        source: "/learn/getting-started/your-first-repository",
        destination: "/learn/repositories/setting-up-repository",
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
        destination: "/learn/repositories/your-first-repository",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/projects/learn/getting-started/start-building`,
        destination: "/learn/repositories/your-first-repository",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/projects/learn/getting-started/keep-working-on-vscode`,
        destination: "/learn/editors/vscode/overview",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/projects/learn/getting-started/keep-working-on-ios`,
        destination: "/learn/editors/ios/overview",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/projects/learn/editor`,
        destination: "/learn/editors/web/overview",
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
        destination: "/learn/editors/web/commandpalette",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/projects/learn/editor/shortcuts`,
        destination: "/learn/editors/web/shortcuts",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/projects/learn/setting-up/tasks`,
        destination: "/learn/repositories/tasks",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/projects/learn/setting-up/env`,
        destination: "/learn/environment/vm",
        permanent: true,
      },
      {
        source: `${PREFIX_PATH}/projects/learn/setting-up/secrets`,
        destination: "/learn/environment/secrets",
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
      /*
           Redirects to pages after restructuring
        */
      {
        source: "/learn/introduction/overview",
        destination: "/learn",
        permanent: true,
      },
      {
        source: "/learn/introduction/workspace",
        destination: "/learn/teams/workspace",
        permanent: true,
      },
      {
        source: "/learn/getting-started/setting-up-repository",
        destination: "/learn/repositories/setting-up-repository",
        permanent: true,
      },
      {
        source: "/learn/getting-started/your-first-sandbox",
        destination: "/learn/sandboxes/your-first-sandbox",
        permanent: true,
      },
      {
        source: "/learn/getting-started/setting-up-vscode",
        destination: "/learn/editors/vscode/setting-up-vscode",
        permanent: true,
      },
      {
        source: "/learn/getting-started/setting-up-ios",
        destination: "/learn/editors/ios/setting-up-ios",
        permanent: true,
      },
      {
        source: "/learn/getting-started/collaborate-share",
        destination: "/learn/repositories/collaborate-share",
        permanent: true,
      },
      {
        source: "/learn/getting-started/open-source",
        destination: "/learn/repositories/open-source",
        permanent: true,
      },
      {
        source: "/learn/sandboxes/tests",
        destination: "/learn/sandboxes/overview",
        permanent: true,
      },
      {
        source: "/learn/sandboxes/secrets",
        destination: "/learn/environment/secrets",
        permanent: true,
      },
      {
        source: "/learn/sandboxes/configuration",
        destination: "/learn/repositories/task",
        permanent: true,
      },
      {
        source: "/learn/sandboxes/deployment",
        destination: "/learn/browser-sandboxes/deployment",
        permanent: true,
      },
      {
        source: "/learn/repositories/editors",
        destination: "/learn/repositories/editors/overview",
        permanent: true,
      },
      {
        source: "/learn/repositories/commandpalette",
        destination: "/learn/editors/web/commandpalette",
        permanent: true,
      },
      {
        source: "/learn/repositories/shortcuts",
        destination: "/learn/editors/web/shortcuts",
        permanent: true,
      },
      {
        source: "/learn/repositories/tasks",
        destination: "/learn/repositories/task",
        permanent: true,
      },
      {
        source: "/learn/repositories/limitations",
        destination: "/learn/environment/limitations",
        permanent: true,
      },
      {
        source: "/learn/repositories/themes",
        destination: "/learn/editors/web/themes",
        permanent: true,
      },
      {
        source: "/learn/integrations/explore",
        destination: "/learn/explore",
        permanent: true,
      },
      {
        source: "/learn/plan-billing/pricing-faq",
        destination: "/learn/teams/plan-billing/pricing-faq",
        permanent: true,
      },
      {
        source: "/learn/plan-billing/trials",
        destination: "/learn/teams/plan-billing/trials",
        permanent: true,
      },
      // changes after new subscription model
      {
        source: "/learn/teams/team-overview",
        destination: "/learn/plans/plan-overview",
        permanent: true,
      },
      {
        source: "/learn/teams/permissions",
        destination: "/learn/plans/permissions",
        permanent: true,
      },
      {
        source: "/learn/teams/preferences",
        destination: "/learn/plans/preferences",
        permanent: true,
      },
      {
        source: "/learn/teams/workspace",
        destination: "/learn/plans/workspace",
        permanent: true,
      },
      {
        source: "/learn/teams/plan-billing/pricing-faq",
        destination: "/learn/plans/pricing-faq",
        permanent: true,
      },
      {
        source: "/learn/teams/plan-billing/trials",
        destination: "/learn/plans/trials",
        permanent: true,
      },
      {
        source: "/learn/repositories/setting-up-repository",
        destination: "/learn/repositories/getting-started/repo-import",
        permanent: true,
      },
      /*
           Redirects for missing repo content that is available 
           under devboxes
           Not permanent redirection as content might change
        */
      {
        source: "/learn/repositories/task",
        destination: "/learn/devboxes/task",
        permanent: false,
      },
      {
        source: "/learn/repositories/devtools",
        destination: "/learn/devboxes/devtools",
        permanent: false,
      },
      {
        source: "/learn/repositories/preview",
        destination: "/learn/devboxes/preview",
        permanent: false,
      },
      {
        source: "/learn/repositories/terminal",
        destination: "/learn/devboxes/terminal",
        permanent: false,
      },
      {
        source: "/learn/repositories/upload",
        destination: "/learn/devboxes/upload",
        permanent: false,
      },
      {
        source: "/learn/repositories/interactive-readme",
        destination: "/learn/devboxes/interactive-readme",
        permanent: false,
      },
      {
        source: "/learn/repositories/secrets",
        destination: "/learn/devboxes/secrets",
        permanent: false,
      },
      {
        source: "/learn/browser-sandboxes/secrets",
        destination: "/learn/devboxes/task",
        permanent: false,
      },
      {
        source: "/learn/sandboxes/synced-templates",
        destination: "/learn/devboxes/synced-templates",
        permanent: false,
      },
      {
        source: "/learn/sandboxes/configuration",
        destination: "/learn/legacy-sandboxes/configuration",
        permanent: false,
      },
      {
        source: "/learn/browser-sandboxes/configuration",
        destination: "/learn/legacy-sandboxes/configuration",
        permanent: false,
      },
      {
        source: "/learn/sandboxes/deployment",
        destination: "/learn/legacy-sandboxes/deployment",
        permanent: false,
      },
      {
        source: "/learn/sandboxes/live-sessions",
        destination: "/learn/legacy-sandboxes/live-sessions",
        permanent: false,
      },
      {
        source: "/learn/sandboxes/test",
        destination: "/learn/legacy-sandboxes/test",
        permanent: false,
      },
      {
        source: "/learn/boxy/faqs",
        destination: "/learn/ai/faqs",
        permanent: false,
      },
      {
        source: "/learn/boxy/getting-started",
        destination: "/learn/ai/getting-started",
        permanent: false,
      },
      /*
           Redirects for changes to UBB content
        */
      {
        source: "/learn/plans/plan-overview",
        destination: "/learn/plans/subscriptions",
        permanent: false,
      },
      {
        source: "/learn/plans/workspace",
        destination: "/learn/access/workspace",
        permanent: false,
      },
      {
        source: "/learn/plans/permissions",
        destination: "/learn/access/permissions",
        permanent: false,
      },
      {
        source: "/learn/plans/ubb",
        destination: "/learn/credit-usage/credits",
        permanent: false,
      },
      {
        source: "/learn/devboxes/editors",
        destination: "/learn/devboxes/overview",
        permanent: false,
      },
    ];
  },
});
