import { useEffect } from "react";
import "nextra-theme-docs/style.css";
import "../../../layout/global.css";
import "../styles.css";

function ModifyDOMProvider({ children }) {
  useEffect(() => {
    const logoLink = document.querySelector("#logo");
    const parent = document.querySelector("#logo")?.parentNode;
    parent?.after(logoLink);
    parent?.remove();
    // logoLink.setAttribute("style", "pointer-events: none;");
  }, []);

  return <>{children}</>;
}

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
