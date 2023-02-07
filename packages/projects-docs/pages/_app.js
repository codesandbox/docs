import "../styles.css";
import amplitude from "amplitude-js";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter();

  // Init Amplitude
  amplitude.getInstance().init(process.env.NEXT_PUBLIC_AMPLITUDE, null, {
    includeReferrer: true,
    saveEvents: true,
    includeUtm: true,
    saveParamsReferrerOncePerSession: false,
  });

  const isBrowser = typeof window !== "undefined";
  const [initialRouteTracked, setInitialRouteTracked] = useState(false);

  useEffect(() => {
    if (isBrowser && !initialRouteTracked) {
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
