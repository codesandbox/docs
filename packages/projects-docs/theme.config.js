import Logo from "./components/Logo";
import { useConfig } from "nextra-theme-docs";

const OG_IMAGE_URL = "https://codesandbox.io/docs/projects/og-image.jpg";

export default {
  project: {},

  footer: { component: null },
  feedback: { content: null },

  editLink: {
    text: "Edit this page on CodeSandbox →",
    component: ({ children, className, filePath }) => (
      <a
        href={`https://codesandbox.io/p/github/codesandbox/docs/main?file=/packages/projects-docs/${filePath}`}
        className={className}
      >
        {children}
      </a>
    ),
  },

  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="nextra-sidebar-separator">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  gitTimestamp: null,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – CodeSandbox",
    };
  },
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
