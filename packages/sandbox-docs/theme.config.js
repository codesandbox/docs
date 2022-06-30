import { useRouter } from "next/router";
import Logo from "./components/Logo";
import BackLink from "../../shared-components/BackLink";
import defaultConfigs from "codesandbox-theme-docs/shared.config.js";

export default {
  ...defaultConfigs,
  docsRepositoryBase: "https://codesandbox.io/p/github/codesandbox/docs/main",
  titleSuffix: " - Sandbox",
  i18n: [{ locale: "en-US", text: "English" }],
  projectLinkIcon: BackLink,
  logo: () => <Logo />,
};
