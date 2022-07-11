---
title: DevTools - The Basics
description: 
---

import Callout from 'nextra-theme-docs/callout'

# DevTools - The Basics
 
![CodeSandbox Projects Preview](../images/devtools-open.png)

The Devtools is a collection of tools for developers to work faster and more efficiently. They are useful for debugging, testing, and development. They are all collaborative by default, allowing you to share not the code but the content of the devtools: a terminal output, a preview error, an console log...

## Start a Devtool

To add a new devtool, click the `+` button in the header or use the shortcut <kbd>Cmd/Clt</kbd> <kbd>shift</kbd> <kbd>o</kbd>.

You can add many devtools you want it. For one or two devtools, it will adapt to the viewport; more than three items will create a scroll. 

## Manage your DevTool 

![CodeSandbox Projects Preview](../images/devtools-options.png)

#### Minimize

You can minimize the devtool by clicking in the top left corner `...` and selecting the option minimize. It's good for saving some viewport space and still tracking some processes. 

#### Close 

Click in the top left corner `...` inside a DevTool and select the option close. You can also close all devtools using command pallete <kbd>Cmd/Clt</kbd> <kbd>K</kbd> and select the option close all.

<Callout emoji="★">
Close a devtool will not stop; it will keep running in the background. When you close, you only remove it for the view. If you want to stop the process, you must search for the option close and stop. 
</Callout>

#### Reorder

You can drag and drop to reorder, or click on the `...` button inside a DevTool, then choose "Move up" or "Move down."

#### Configuring

You can control the name, position, and what is the initial devtools when you start the editor. Check the [`task.json`](a) documentation to learn how to configure the devtools.

<Callout emoji="★">
It's worth configuring and making it accessible for your entire team. Once you setup it's easy for non-developers to access the editor and run your project.
</Callout>

## Available DevTools

At moment, we support three types of Devtools:

- [Preview](./preview)
- [Task](./task)
- [Terminal](./terminal)

We are considering support for others in the future. These may include:

- A test runner UI
- A way to view / edit [Design Tokens](https://css-tricks.com/what-are-design-tokens/) in a project
- A way to view components in isolation and change their props from a UI
- A [Postman](https://www.postman.com/) integration
- A bundle size analyzer

If you have ideas or want to work to itegrate a DevTools, please reach us at [support@codesandbox.io](a)
