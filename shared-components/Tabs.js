import React, { useEffect, useState } from "react";
import * as ReactDOMServer from "react-dom/server";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import styles from "./Tabs.module.css";
import { useRouter } from "next/router";

// Exports
export const TabsContainer = TabsPrimitive.Root;
export const TabsList = TabsPrimitive.List;
export const TabsTrigger = TabsPrimitive.Trigger;
export const TabsContent = TabsPrimitive.Content;

export function WrapContent({ children }) {
  return <>{children}</>;
}

export function Tabs({ children, tabs }) {
  const router = useRouter();
  const [tab, setTab] = useState(undefined);

  useEffect(() => {
    setTab(router.query.tab);
  }, [router.query]);

  // Check the content inside tabs with the url and activate the right tab
  useEffect(() => {
    const checkContentMatch = (url, pushURL) => {
      const match = url.split("#")[1];
      let checkMatch = false;
      for (let i = 0; i < children.length; i++) {
        const content = ReactDOMServer.renderToString(children[i]);

        if (content.includes(match)) {
          checkMatch = i;
          break;
        }
      }

      if (checkMatch !== false) {
        if (pushURL) {
          let newurl = url.replace(
            /tab=(.*?)(\#|\s)/,
            `tab=${slugify(tabs[checkMatch])}#`
          );

          router.push(newurl, undefined, {
            shallow: true,
          });
        }
        setTab(slugify(tabs[checkMatch]));
      }
    };

    const onHashChanged = (event) => {
      checkContentMatch(event.newURL, true);
    };

    window.addEventListener("hashchange", onHashChanged);

    if (router.asPath.includes("#")) {
      checkContentMatch(router.asPath, false);
    }

    return () => {
      window.removeEventListener("hashchange", onHashChanged);
    };
  }, [router]);

  return (
    <TabsContainer
      value={tab}
      defaultValue={slugify(tabs[0])}
      className={styles.container}
      onValueChange={(value) => {
        router.push(
          {
            query: { tab: value },
          },
          undefined,
          {
            scroll: false,
            shallow: true,
          }
        );
      }}
    >
      <TabsList className={styles.tabList}>
        {tabs.map((title, index) => {
          return (
            <TabsTrigger
              value={slugify(title)}
              className={styles.tabTrigger}
              key={`tab-${slugify(title)}-${index}`}
            >
              {title}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {children.map((child, index) => {
        return (
          <TabsContent
            value={slugify(tabs[index])}
            className={styles.tabContent}
            key={`content-${slugify(tabs[index])}-${index}`}
          >
            {child}
          </TabsContent>
        );
      })}
    </TabsContainer>
  );
}

const slugify = (text) =>
  text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
