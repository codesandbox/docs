import Logo from "./components/Logo";
import BackLink from "../../shared-components/BackLink";
import defaultConfigs from "codesandbox-theme-docs/shared.config.js";

export default {
  ...defaultConfigs,
  docsRepositoryBase: "https://codesandbox.io/p/github/codesandbox/docs/main",
  titleSuffix: " - CodeSandbox for iOS",
  head: ({ title, meta }) => {
    const ogImage = "https://codesandbox.io/docs/ios/og-image.jpg";

    return (
      <>
        {/* Favicons, meta */}
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            meta.description ||
            "The first Cloud IDE for iOS. Start build anywhere anytime"
          }
        />
        <meta
          name="og:description"
          content={
            meta.description ||
            "The first Cloud IDE for iOS. Start build anywhere anytime"
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@codesandbox" />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="og:title"
          content={
            title
              ? title + " – CodeSandbox for iOS"
              : "CodeSandbox for iOS Documentation"
          }
        />
        <meta name="og:image" content={ogImage} />
      </>
    );
  },
  projectLinkIcon: BackLink,
  logo: () => <Logo />,
};
