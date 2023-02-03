---
title: Repositories Setup + Tips & Tricks
description: This guide is the first step to get started with CodeSandbox for your repo. It’s a walk-through with a bunch of tips and tricks on how to get the most out of CodeSandbox!
---

import { Callout } from 'nextra-theme-docs'

This guide will help you get started with using CodeSandbox for your repo. It’s a walk-through with a bunch of tips and tricks on how to get the most out of CodeSandbox!

## Create a Team & Import Repository

To get started with CodeSandbox for your repo, you first need to create a team. You can do this at [the dashboard](https://codesandbox.io/dashboard), by clicking on the workspace on the left, and pressing “Create a new team”. You can optionally start a free trial, in case you want better VM specs and import a private repositories.

![Pasted image 20230202132514.png](/team-creation.png)

Once you’ve created the team, you can import a repository by clicking “Import from GitHub” and entering the URL of the GitHub repo. Once you’ve clicked “Import”, you’re off to the races!

<Callout emoji="💡">You can also type your repo without GitHub URL (e.g. “codesandbox/test-sandbox”) to import the repo</Callout>

The first time when you import a repo, it can take a while. During first-time setup, we clone the repository into the VM and set up the folders for the project. However, after this setup we will create a memory snapshot of the VM, which will ensure that next VM loads (& clones!) will be fast.

## Editor & Workflow Setup

CodeSandbox has an opinionated flow when it comes to working with repositories, and you can see hints of this in the editor. As soon as you enter the editor, you will see the current branch name in the header. Every branch has its own VM and is available through a unique URL. For example, if two people visit the URL for the `main` branch, they will be able to see the cursor, terminals and devtools of each-other.

<Callout emoji="💡">URLs for branches are predictable, if you want to open a specific branch, you can update the URL with thew new branch name, and we’ll import & create a VM for that branch automatically</Callout>

Now it’s time to write some code! However, the default branch is protected. This means that the branch is read-only, and will sync automatically with the branch on GitHub when new commits come in. To actually write some code, you need to create a new branch. You can do this by either typing some code, or by clicking the “Branch” button in the header. This will automatically create a new branch and VM tied to that branch.

When we create the new branch, we create a clone of the `main` VM and switch it to the new branch. This new VM is an _exact_ copy of the original VM, down to the memory contents. Because of this, processes like dev servers are already started in the cloned VM.

<Callout emoji="💡">Tip: you can start a Postgres database on the `main` branch, seed some data in it, and then every new branch created from `main` will have that data available.</Callout>

As you can see, we automatically generated a new branch for this VM, starting with `draft/...`. Here you can make changes, open terminals or open any other devtool. When you’re ready to open a PR, you can either click “Create PR” in the header, or commit from the Git panel in the sidebar.

<Callout emoji="⭐">New branches are not automatically created on GitHub. Only when you create a commit or rename the branch we’ll push the branch to GitHub</Callout>

Now, let’s do some configuration to make your repository work in CodeSandbox.

### Environment Configuration

Generally, we recommend to configure the environment with a `Dockerfile`. When Docker is enabled, any new terminal will open inside a container and you will have `root` access to install additional packages.

To enable the Docker integration, you need to create a folder called `.codesandbox` in the root of your repo and put a file named `Dockerfile` in there. An example Dockerfile could look like this:

```docker
FROM node:18.14.0-bullseye

# Install htop
RUN apt update -y && apt install -y htop
```

This will ensure that Node.js is installed, but you can make any changes to this `Dockerfile` to install additional language support or packages.

<Callout emoji="⭐">Currently we only install Debian or Ubuntu based Docker images, because we install additional utilities like zsh and git on top of the image</Callout>

After you’ve made changes to the `Dockerfile`, you should see a notification that prompts to rebuild the containers. Press “Yes”, and you’ll see the setup tasks start again, with a new entry to build the image. The built image is cached, and available through VM cloning in other branches.

<Callout emoji="💡">Native `docker-compose` support is still underway, but for now you can create a task to call `docker-compose up` . We’ll get to tasks later in this guide.</Callout>

You don’t have to mount or `ADD` any files from your workspace folder. We’ll make sure that your repository is mounted at `/workspace` when we start the container.

If you would like to learn more about how our Docker integration works, we recommend to check out [Docker Integration](/docs/learn/environment/docker).

### Task Configuration

You can use tasks to configure what terminal commands should run by default, and what terminal commands need to run when the VM boots, or when a certain event happens.

To create a task configuration, open the command palette by typing <kbd>⌘</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>. Then choose “Create task configuration”.

There are two fields in this file:

- `setupTasks`: these tasks are run when the VM boots, or when a new commit comes in on a protected branch (like `main`)
- `tasks`: these tasks are available through devtools, and are the recommended way to configure commands to start development servers or build tasks

An example configuration could look like this:

```json
{
  "setupTasks": [
    {
      "name": "Installing Dependencies",
      "command": "pnpm install"
    }
  ],
  "tasks": {
    "dev": {
      "name": "Application",
      "command": "pnpm dev:v2",
      "runAtStart": true,
      "restartOn": {
        "files": ["pnpm-lock.yaml"]
      },
      "preview": {
        "port": 4000,
        "pr-link": "direct"
      }
    },
    "docker-compose": {
      "name": "Run Docker-Compose",
      "command": "docker-compose up",
	  "runAtStart": true
    },
    "tests": {
      "name": "Run Tests",
      "command": "pnpm test"
    }
  }
}
```

This configuration says that:

- We should run `pnpm install` during setup
- We should run `pnpm dev:v2` when setup has completed
  - In any case that `pnpm-lock.yaml` changes, restart this task
  - When a new PR opens, make a deployment for port `4000` and put it in the pull request
- There’s a task available to run tests, which anyone can click to run tests

<Callout emoji="💡">There are more properties you can configure in this config, we have more information about this [here](/docs/learn/repositories/task#tasks-configuration)</Callout>

If you want to run `docker-compose`, this would be the perfect to add that. You can create a new task that runs `docker-compose up`, and we’ll make sure it’s started when the VM boots.

<Callout emoji="⭐">Tasks are not started as your user, but by a global user named `pitcher-host`</Callout>

By making these changes, you’ll ensure that other developers won’t have to figure out what setup to do, or what commands to run to get started.

### Secret Configuration

Many repositories require some environment variables to be set. Either to connect to an external service, or as configuration of the environment itself.

CodeSandbox allows you to set environment variables by clicking on our logo in the top left corner, and clicking on “Env variables”. These environment variables will be encrypted and stored in our database. After you’ve set the environment variables, they will be available for any branch in the repository after a restart.

You can learn more about our environment variable support [here](/docs/learn/environment/secrets).

### VSCode Configuration

CodeSandbox supports opening branches in VSCode and in our native iOS app. When you open the branch inside VSCode, you will have access to your own extensions, keybindings and themes.

<Callout emoji="⭐">VSCode and iOS also have live collaboration. This means that you’ll be able to work together with someone who has the same branch open inside the web editor</Callout>

If you want to configure default VSCode extensions to be installed for your repository, you can create a new file called `.vscode/recommendations.json`.

This is an example of how this file could look like:

```json
{
  "recommendations": ["esbenp.prettier-vscode", "dbaeumer.vscode-eslint"]
}
```

When someone opens this VM in VSCode, we’ll make sure that the extensions are preinstalled.

If you want to have some personal extensions available in any CodeSandbox branch, you can update your own VSCode settings to reflect this. In your VSCode settings (we recommend opening the JSON version by clicking on the File icon in the top left), you can add these settings for example:

```json
  "remote.SSH.defaultExtensions": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "GitHub.vscode-pull-request-github",
    "GitHub.copilot",
    "eamodio.gitlens"
  ]
```

To automatically install these extensions when connecting with a VM.

### Deployment Previews & GitHub App

Now that you’ve configured your repository to work in CodeSandbox, you can also configure deployment previews. This way, every PR will have a preloaded running development environment available for anyone on the team to use. This is great for reviewing changes, testing the application, or quickly making changes to a PR.

To enable deployment previews, you need to install the GitHub App. You can do this through the command palette by opening the command palette (<kbd>⌘</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>) and selecting “Install GitHub App”.

After you’ve gone through the steps of the installation, you should automatically get deployments for new PRs with a link to both the preview (if configured through tasks) and the development environment!

There are more advantages of using the GitHub App, like automatic dashboard syncing. You can learn more about this [here](/docs/learn/integrations/github-app).
