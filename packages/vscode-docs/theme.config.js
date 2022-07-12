import { useRouter } from "next/router";
import Logo from "./components/Logo";
import BackLink from "../../shared-components/BackLink";
import defaultConfigs from "codesandbox-theme-docs/shared.config.js";

export default {
  ...defaultConfigs,
  docsRepositoryBase: "https://codesandbox.io/p/github/codesandbox/docs/main",
  titleSuffix: " - VS Code",
  head: ({ title, meta }) => {
    const ogImage = "https://codesandbox.io/docs/vscode/og-image.jpg";

    return (
      <>
        {/* Favicons, meta */}
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            meta.description ||
            "No lock-in. Use the tools you love. With your CodeSandbox, you can code with your local tools using VS Code"
          }
        />
        <meta
          name="og:description"
          content={
            meta.description ||
            "No lock-in. Use the tools you love. With your CodeSandbox, you can code with your local tools using VS Code"
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@codesandbox" />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="og:title"
          content={
            title
              ? title + " – CodeSandbox for VS Code"
              : "CodeSandbox for VS Code Documentation"
          }
        />
        <meta name="og:image" content={ogImage} />
      </>
    );
  },
  projectLinkIcon: BackLink,
  logo: () => <Logo />,
};
