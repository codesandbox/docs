import Logo from "./components/Logo";
import BackLink from "../../shared-components/BackLink";
import defaultConfigs from "codesandbox-theme-docs/shared.config.js";
import { useConfig } from "nextra-theme-docs";

const OG_IMAGE_URL = "https://codesandbox.io/docs/projects/og-image.jpg";

export default {
  ...defaultConfigs,
  docsRepositoryBase: "https://codesandbox.io/p/github/codesandbox/docs/main",
  titleSuffix: " - CodeSandbox",
  project: { icon: BackLink },
  gitTimestamp: null,
  head() {
    const { frontMatter } = useConfig();

    return (
      <>
        {/* Favicons, meta */}
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            frontMatter.description ||
            "Experience the future of web development and build projects anywhere and anytime with your team."
          }
        />
        <meta
          name="og:description"
          content={
            frontMatter.description ||
            "Experience the future of web development and build projects anywhere and anytime with your team."
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@codesandbox" />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
        <meta
          name="og:title"
          content={
            frontMatter.title
              ? frontMatter.title + " – CodeSandbox"
              : "CodeSandbox Documentation"
          }
        />
        <meta name="og:image" content={OG_IMAGE_URL} />
      </>
    );
  },
  logo: () => <Logo />,
};
