---
title: Web Editor
description:
---

import Callout from 'nextra-theme-docs/callout'
import Video from '../../../../../shared-components/Video'

# Overview

![The web editor](../images/overview-web.jpg)

CodeSandbox has [many alternatives for you to code](../introduction/overview). One of the tools is our unique and opinionated **Web Editor**, built from scratch and optimized to help the developer focus on what matters: getting the work done  without friction. 

The Web Editor contains a set of features to increase the accessibility of complex tools like git, setup, review flows, contributions, and visualizing components. 

Here is an overview of the web editor structure:

### Header

![The web editor](../images/overview-header.jpg)

The header is where you perform general operations on your project.

**1. Navigation**
    - **Project**: Click to return to the project level.
    - **Branch**: Checkout to other branches.

**2. Devtool menu**
    - **Add Devtools**: Set up devtools to facilitate your work and automatize repetitive tasks.

**3. Connections**
    - **Avatars**: See who's currently online and click to follow their steps.

**4. Collaborate**
    - **Share**: Invite friends to work together.
    - **Branch**: Quickly start a new branch and propose changes.


### Sidebar

![The web editor](../images/overview-sidebar.jpg)

The sidebar is a quick way to operate and navigate your codebase. It allows you to:

- View and manipulate your files
- Search inside your project
- Interact with source control

You can change the sidebar view using the icons in the top. 

<Callout emoji="⭑">
    You can drag and drop elements and shift or command click to select multiple itens in the lists. 
</Callout>

### Code Editor

![The web editor](../images/overview-editor.jpg)

The code editor is where the magic happens ✨. We provide a base experience for all developers, with support for:

- Code formatting (Prettier or ESLint)
- LSP
- Intellisense
- Code completion
- Optimized syntax highlight
- Ligatures
- Multiple Editors
- Diff view

 If you want more advanced features, you can download our [VSCode extension](https://marketplace.visualstudio.com/items?itemName=CodeSandbox-io.codesandbox-projects) and [open the project inyour local IDE](../getting-started/keep-working-on-vscode) with your own customizations.

### DevTool

CodeSandbox signature layout with three columns and a runnable preview is back with superpowers. The new panel on the right supports useful tools to help you complete your work faster and more efficiently. Read more about it [here](devtools).

### Layout

<Video src="../../overview-resize.mp4" />

CodeSandbox Web Editor allows you to customize the three-panel layout to maximize the space for the task you are working on. Hover the mouse near the edge of each column to see the resize cursor; click and hold to change the layout. 

After reaching the proportional limit, keep dragging to hide the entire column. 

**Keyboard Shortcuts**

Press <kbd>Cmd/Ctrl</kbd> <kbd>B</kbd> to hide the Sidebar.

Press <kbd>Cmd/Ctrl</kbd> <kbd>.</kbd> to hide the DevTools. 
