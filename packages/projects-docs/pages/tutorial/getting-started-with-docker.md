---
title: Getting started with Docker and NixOS
description: Using docker and docker-compose with CodeSandbox.
---

import Callout from 'nextra-theme-docs/callout'

# Getting started with Docker and NixOS

Docker and Nix are available within CodeSandbox Repositories as an experimental feature. You can run and build images to run containers inside your project by opening a terminal and running `docker`. If you have a `docker-compose` file in your root folder, you only have to run `docker-compose up`. Then, all your services will run within CodeSandbox Repositories.

In addition, [Nix](https://nixos.org/) is also supported. Nix is a tool that takes a unique approach to package management and system configuration. Basically, you can install any additional tool, like Java or Node v16, in your OS.

### 1. Click on the add a devtool dropdown

![Pressing the add devtool button shows a dropdown with the different devtools you can add.](https://images.tango.us/public/screenshot_2cd6a519-514d-48d2-b75d-2a88f700d38c.png?crop=focalpoint&fit=crop&fp-x=0.8471&fp-y=0.0160&fp-z=3.2192&w=1200&ar=3892%3A3008)

### 2. Open a new terminal

![When selecting the terminal devtool option in the dropdown a sub menu shows up with the option to add a new terminal.](https://images.tango.us/public/screenshot_1e72d8f1-3ea5-4219-941b-98bbd2e25c2a.png?crop=focalpoint&fit=crop&fp-x=0.9399&fp-y=0.1509&fp-z=3.0619&w=1200&ar=3892%3A3008)

### 3. Run a docker image

![Inside the terminal a command is pasted to run the docker image.](https://images.tango.us/public/screenshot_e4ebb65d-2dc2-4560-84eb-df5d1296dfcb.png?crop=focalpoint&fit=crop&fp-x=0.7255&fp-y=0.2595&fp-z=1.9255&w=1200&ar=3892%3A3008)

### 4. Opened ports will be picked up automatically

If you run a development server (for example inside the container) and it opens up a port, then CodeSandbox Repositories will detect that automatically and make the preview available. In this case, you can open the preview from the Other Previews submenu.

![DevTools have an option with other previews. Selecting this option will show a submenu with ports running the previews.](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3a225439-9c75-4f67-a1f6-5946a097e3d8%2FUntitled.png?table=block&id=2c4272cf-8620-4bd5-a722-c5aaa5ddc2e4)

### 5. (Optional) Persist it as a task

If you would like to start a given container every time you create a new branch or even restart your repositories, then you can persist it as a task, as shown below.

![When opening the devtools menu and selecting tasks, a submenu with your tasks and an option to add a new task is shown. The new task option is highlighted.](https://images.tango.us/public/screenshot_57812431-5034-451d-b6f6-9c41ee4a4d96.png?crop=focalpoint&fit=crop&fp-x=0.9399&fp-y=0.2041&fp-z=3.0619&w=1200&ar=3892%3A3008)

### 6. Paste in the Command Palette

Simply paste the command into the Command Palette and CodeSandbox Repositories will create a configuration file.

![The command palette is shown with an indicator that the current action is adding a task, and the command is pasted inside the input.](https://images.tango.us/public/screenshot_3378f1fc-cc81-4028-ab1a-fb206716d182.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.1577&fp-z=1.6881&w=1200&ar=3892%3A3008)

### 7. Put it in the right place in your configuration

If you define this as a task, you will be able to run the container from the UI. You can also put it under `setupTask` - in this case, the container will start the next time you create a workspace.

<Callout emoji="⭑">
Tip: Commit your changes and add the configuration to your repository so CodeSandbox can run the container for every newly created branch.
</Callout>

![The tasks.json file is open in the editor and shows all tasks that exist for the project.](https://images.tango.us/public/screenshot_d470cb2e-7005-4caa-bcb6-218c104eb298.png?crop=focalpoint&fit=crop&fp-x=0.3920&fp-y=0.5279&fp-z=1.0592&w=1200&ar=3892%3A3008)