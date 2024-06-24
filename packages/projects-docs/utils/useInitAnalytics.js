import { useEffect, useState } from "react";
import amplitude from "amplitude-js";
import * as CookieConsent from "vanilla-cookieconsent";
import { cookieConsentConfig } from "./cookieConsentConfig";

export const useInitAnalytics = (amplitudeApiKey) => {
  const [analyticsInitialized, setAnalyticsInitialized] = useState(false);

  const initAnalytics = () => {
    if (!amplitudeApiKey || analyticsInitialized) {
      return;
    }

    amplitude.init(amplitudeApiKey, null, {
      includeReferrer: true,
      saveEvents: true,
      includeUtm: true,
      saveParamsReferrerOncePerSession: false,
    });

    setAnalyticsInitialized(true);
  };

  const handleCookieConsent = (cookie) => {
    const allowAnalytics = cookie?.categories?.includes("analytical") || false;
    if (allowAnalytics && !analyticsInitialized) {
      initAnalytics();
    }

    amplitude.getInstance().setOptOut(!allowAnalytics);
  };

  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || window.self !== window.top) {
      return;
    }

    CookieConsent.run({
      onFirstConsent: ({ cookie }) => {
        handleCookieConsent(cookie);
      },
      onChange: ({ cookie }) => {
        handleCookieConsent(cookie);
      },
      ...cookieConsentConfig,
    });

    const cookieConsent = CookieConsent.getCookie();
    handleCookieConsent(cookieConsent);
  }, []);
};
