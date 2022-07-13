---
title: Web Editor
description:
---

import Callout from 'nextra-theme-docs/callout'
import Video from '../../../../../shared-components/Video'

# Overview

![The web editor](../images/overview-web.jpg)

CodeSandbox has [many alternatives for you to code](linktoiosandvscode). One of the tools is the unique and opinionated Web Editor, built from scratch and optimized to help the developer focus on what matters: being creative and doing their activities without friction. 

The web editor contains a set of features to increase the accessibility of complex tools like git, setup, review flows, contributions, and visualizing components. 

Here is an overview of the web editor structure:

## Header

![The web editor](../images/overview-header.jpg)

The header is where you perform general operations on your project.

- **Navigation**: Back to the project level.
- **Navigation**: Checkout to other branches.
- **DevTools**: Add devtools to help in your work. 
- **Collaborate**: Invite friends to work together.
- **Collaborate**: Quickly start a new branch and propose changes.


## Sidebar

![The web editor](../images/overview-sidebar.jpg)

The sidebar is a quick way to operate and navigate your codebase. It allows you to:

- View and manipulate your files
- Search inside your project
- Interact with source control

You can change the sidebar view using the icons in the top. 

<Callout emoji="★">
    The lists inside the sidebar works the same way of a OS: you can drag and drop elements, shift or command click to multi select.  
</Callout>

## Code Editor

![The web editor](../images/overview-editor.jpg)

The code editor is where your magic happens ✨. We provide a common experience for all developers. With the support of:

- Code formatting (Prettier or ESLint)
- LSP
- Intellisense
- Code completion
- Optimized syntax highlight
- Ligatures
- Multiple Editors
- Diff view

What makes the editor perfect for a quick look at a Pull Request, starting a new project, or testing an idea. If you want more advanced features, you can always open the project in [your favorite IDE](vscodeguide), with the customizations you made.

## DevTool

CodeSandbox signature of a three-pane view and a runnable preview is back with superpowers. The new right panel supports any useful tool to help you complete your work faster and efficiently. You can read more about it [here](https://codesandbox.io/docs/devtools).

## Layout

<Video src="../../overview-resize.mp4" />

CodeSandbox Web Editor allows you to customize the three-panel layout to maximize the space for the task you are working on. Hover the mouse near the edge of each column to see the resize cursor; click and hold to change the layout. 

After reaching the proportional limit, if you keep dragging, you can hide the entire column. 

<kbd>Cmd/Ctrl</kbd> <kbd>B</kbd> hide the Sidebar
<kbd>Cmd/Ctrl</kbd> <kbd>.</kbd> hide the DevTools 
