import "codesandbox-theme-docs/style.css";
import "../styles.css";
import amplitude from "amplitude-js";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter();

  // Init Amplitude
  amplitude.getInstance().init("a205ed9b06a7baf5a594bdd30293aa80", null, {
    includeReferrer: true,
  });

  const isBrowser = typeof window !== "undefined";
  const [initialRouteTracked, setInitialRouteTracked] = useState(false);

  useEffect(() => {
    if (isBrowser && !initialRouteTracked && window.location.search === "") {
      const event = "pageview";
      const eventProperties = {
        source: "docs",
        path: router.asPath,
      };
      amplitude.getInstance().logEvent(event, eventProperties);
      setInitialRouteTracked(true);
    }
  }, [router]);

  useEffect(() => {
    // Track page views
    const handleRouteChange = (path) => {
      const event = "pageview";
      const eventProperties = {
        source: "docs",
        path: path,
      };
      amplitude.getInstance().logEvent(event, eventProperties);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  return getLayout(<Component {...pageProps} />);
}
