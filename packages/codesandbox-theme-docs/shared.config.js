import { useRouter } from "next/router";

const FEEDBACK_LINK_WITH_TRANSLATIONS = {
  "en-US": "Question? Give us feedback →",
};

export default {
  projectLink: "https://codesandbox.io",
  unstable_flexsearch: true,
  floatTOC: true,
  footer: false,
  feedbackLink: false,
  //   feedbackLabels: "feedback",
  //   feedbackLink: () => {
  //     const { locale } = useRouter();
  //     return (
  //       FEEDBACK_LINK_WITH_TRANSLATIONS[locale] ||
  //       FEEDBACK_LINK_WITH_TRANSLATIONS["en-US"]
  //     );
  //   },
  footerEditLink: ({ locale }) => {
    switch (locale) {
      default:
        return "Edit this page on CodeSandbox →";
    }
  },
};
