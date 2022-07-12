import { useRouter } from "next/router";
import Logo from "./components/Logo";
import BackLink from "../../shared-components/BackLink";
import defaultConfigs from "codesandbox-theme-docs/shared.config.js";

export default {
  ...defaultConfigs,
  docsRepositoryBase: "https://codesandbox.io/p/github/codesandbox/docs/main",
  titleSuffix: " - Sandbox",
  head: ({ title, meta }) => {
    const ogImage = "https://codesandbox.io/docs/og-image.jpg";

    return (
      <>
        {/* Favicons, meta */}
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            meta.description ||
            "CodeSandbox is an online code editor and prototyping tool that makes creating and sharing web apps faster"
          }
        />
        <meta
          name="og:description"
          content={
            meta.description ||
            "CodeSandbox is an online code editor and prototyping tool that makes creating and sharing web apps faster"
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@codesandbox" />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="og:title"
          content={
            title
              ? title + " – Sandbox"
              : "Sandbox Documentation"
          }
        />
        <meta name="og:image" content={ogImage} />
      </>
    );
  },
  projectLinkIcon: BackLink,
  logo: () => <Logo />,
};
