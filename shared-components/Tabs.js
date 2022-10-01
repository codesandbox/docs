import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import styles from "./Tabs.module.css";

// const StyledTabs = styled(TabsPrimitive.Root, {
//   display: "flex",
//   flexDirection: "column",
//   width: 300,
//   boxShadow: `0 2px 10px ${blackA.blackA4}`,
// });

// const StyledList = styled(TabsPrimitive.List, {
//   flexShrink: 0,
//   display: "flex",
//   borderBottom: `1px solid ${mauve.mauve6}`,
// });

// const StyledTrigger = styled(TabsPrimitive.Trigger, {
//   all: "unset",
//   fontFamily: "inherit",
//   backgroundColor: "white",
//   padding: "0 20px",
//   height: 45,
//   flex: 1,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   fontSize: 15,
//   lineHeight: 1,
//   color: mauve.mauve11,
//   userSelect: "none",
//   "&:first-child": { borderTopLeftRadius: 6 },
//   "&:last-child": { borderTopRightRadius: 6 },
//   "&:hover": { color: violet.violet11 },
//   '&[data-state="active"]': {
//     color: violet.violet11,
//     boxShadow: "inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor",
//   },
//   "&:focus": { position: "relative", boxShadow: `0 0 0 2px black` },
// });

// const StyledContent = styled(TabsPrimitive.Content, {
//   flexGrow: 1,
//   padding: 20,
//   backgroundColor: "white",
//   borderBottomLeftRadius: 6,
//   borderBottomRightRadius: 6,
//   outline: "none",
//   "&:focus": { boxShadow: `0 0 0 2px black` },
// });

// Exports
export const TabsContainer = TabsPrimitive.Root;
export const TabsList = TabsPrimitive.List;
export const TabsTrigger = TabsPrimitive.Trigger;
export const TabsContent = TabsPrimitive.Content;

export function WrapContent({ children }) {
  return <>{children}</>;
}

export function Tabs({ children, tabs }) {
  return (
    <TabsContainer defaultValue="tab1" className={styles.container}>
      <TabsList className={styles.tabList}>
        {tabs.map((title, index) => {
          return (
            <TabsTrigger
              value={`tab${index + 1}`}
              className={styles.tabTrigger}
            >
              {title}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {children.map((child, index) => {
        console.log(`tab${index + 1}`);
        return (
          <TabsContent value={`tab${index + 1}`} className={styles.tabContent}>
            {child}
          </TabsContent>
        );
      })}
    </TabsContainer>
  );
}
