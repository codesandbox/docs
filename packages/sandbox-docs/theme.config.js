import { useRouter } from "next/router";
import Logo from "../../layout/Logo";

const FEEDBACK_LINK_WITH_TRANSLATIONS = {
  "en-US": "Question? Give us feedback →",
};

export default {
  projectLink: "https://codesandbox.io",
  docsRepositoryBase: "https://github.com/vercel/swr-site/blob/master/pages",
  titleSuffix: " – Sandbox",
  feedbackLabels: "feedback",
  unstable_flexsearch: true,
  floatTOC: true,
  footer: false,
  footerText: "Copyright © 2022 CodeSandbox BV.",
  i18n: [{ locale: "en-US", text: "English" }],
  search: true,
  feedbackLink: () => {
    const { locale } = useRouter();
    return (
      FEEDBACK_LINK_WITH_TRANSLATIONS[locale] ||
      FEEDBACK_LINK_WITH_TRANSLATIONS["en-US"]
    );
  },
  logo: () => <Logo>Sandbox</Logo>,
  head: ({ title, meta }) => {
    const { route } = useRouter();

    const ogImage =
      meta.image ||
      `https://swr-card.vercel.app${
        /\/index\.+/.test(route) ? "" : "?title=" + encodeURIComponent(title)
      }`;

    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            meta.description ||
            "SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again."
          }
        />
        <meta
          name="og:description"
          content={
            meta.description ||
            "SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again."
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="og:title"
          content={
            title ? title + " – SWR" : "SWR: React Hooks for Data Fetching"
          }
        />
        <meta name="og:image" content={ogImage} />
        <meta name="apple-mobile-web-app-title" content="SWR" />
      </>
    );
  },
  projectLinkIcon: () => (
    <p
      style={{
        fontSize: "12px",
        textAlign: "right",
        fontWeight: 500,
        letterSpacing: "-0.0125em",
        opacity: 0.5,
      }}
    >
      Back to codesandbox.io
    </p>
  ),
  footerEditLink: ({ locale }) => {
    switch (locale) {
      default:
        return "Edit this page on CodeSandbox →";
    }
  },
};
