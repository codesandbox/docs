import { useRouter } from "next/router";

const FEEDBACK_LINK_WITH_TRANSLATIONS = {
  "en-US": "Question? Give us feedback →",
};

export default {
  project: "https://codesandbox.io",
  unstable_flexsearch: true,
  float: true,
  footer: { component: null },
  feedback: false,
  //   feedbackLabels: "feedback",
  //   feedbackLink: () => {
  //     const { locale } = useRouter();
  //     return (
  //       FEEDBACK_LINK_WITH_TRANSLATIONS[locale] ||
  //       FEEDBACK_LINK_WITH_TRANSLATIONS["en-US"]
  //     );
  //   },
  editLink: ({ locale }) => {
    switch (locale) {
      default:
        return "Edit this page on CodeSandbox →";
    }
  },
};
