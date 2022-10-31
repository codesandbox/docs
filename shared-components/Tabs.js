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
    console.log("query", router.query.tab);
    setTab(router.query.tab);
  }, [router.query]);

  // Check the content inside tabs with the url and activate the right tab
  useEffect(() => {
    const onHashChanged = (event) => {
      const match = event.newURL.split("#")[1];
      const checkMatch = false;
      for (let i = 0; i < children.length; i++) {
        const content = ReactDOMServer.renderToString(children[i]);

        if (content.includes(match)) {
          checkMatch = i;
          break;
        }
      }

      if (checkMatch !== false) {
        router.push(
          {
            query: { tab: slugify(tabs[checkMatch]) },
          },
          undefined,
          {
            shallow: true,
          }
        );
        setTab(slugify(tabs[checkMatch]));
      }
    };

    window.addEventListener("hashchange", onHashChanged);

    return () => {
      window.removeEventListener("hashchange", onHashChanged);
    };
  }, []);

  return (
    <TabsContainer
      defaultValue={slugify(tabs[0])}
      value={tab}
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
