import Logo from "./components/Logo";
import BackLink from "../../shared-components/BackLink";
import defaultConfigs from "codesandbox-theme-docs/shared.config.js";

export default {
  ...defaultConfigs,
  docsRepositoryBase: "https://codesandbox.io/p/github/codesandbox/docs/main",
  titleSuffix: " - CodeSandbox",
  projectLinkIcon: BackLink,
  head: ({ title, meta }) => {
    const ogImage = "https://codesandbox.io/docs/projects/og-image.jpg";

    return (
      <>
        {/* Favicons, meta */}
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            meta.description ||
            "Experience the future of web development and build projects anywhere and anytime with your team."
          }
        />
        <meta
          name="og:description"
          content={
            meta.description ||
            "Experience the future of web development and build projects anywhere and anytime with your team."
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@codesandbox" />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="og:title"
          content={
            title ? title + " – CodeSandbox" : "CodeSandbox Documentation"
          }
        />
        <meta name="og:image" content={ogImage} />
      </>
    );
  },
  logo: () => <Logo />,
};
