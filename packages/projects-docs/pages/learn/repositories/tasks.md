---
title: tasks.json
description:
---

import { Callout } from 'nextra-theme-docs'

# .codesandbox/tasks.json

CodeSandbox Repositories can be configured through the `.codesandbox/tasks.json` configuration file in your project. This file defines the steps to set up VMs and configures the running commands inside the workspace (webservers, Docker containers, tests etc.).

<Callout emoji="⭑">
Checking these files into version control is recommended to ensure that every collaborator has a similar editing experience. This configuration can be tracked and additional changes can be made to specific branches. In addition, once the file is merged to your main branch, every new branch will follow the same configuration.
</Callout>

This is an example of a configuration:

```json
{
  "setupTasks": ["yarn install", "yarn build"],
  "tasks": {
    "install-dependencies": {
      "name": "Install Dependencies",
      "command": "yarn install"
    },
    "start-app": {
      "name": "Run Dev Server",
      "command": "yarn start",
      "runAtStart": true
    }
  }
}
```

## Default configuration

By default, CodeSandbox tries to infer scripts from the `package.json` file in your project's root folder. In addition, you can always use the terminal devtool to execute any shell script to run your project.

## Setup Tasks

Setup tasks are an array of commands that will run sequentially before the workspace is ready to start your application. If no value is provided, `installing dependencies` will be the default task (we will detect which package manager you use).

```json
{
  "setupTasks": [
    {
      "name": "Installing Dependencies",
      "command": "yarn install"
    },
    {
      "name": "Building Workspace",
      "command": "yarn build"
    }
  ]
}
```

## Tasks Configuration

Tasks are scripts that can be run inside your project. In many cases these will call the scripts in your `package.json`, but they can also be used to run other executables.

```json
{
  "tasks": {
    // Task ID is used to uniquely identify each task, we use it to
    // keep track of the task even if the command changes
    "<task-id>": {
      "name": "Install Dependencies", // this is shown in the UI
      "command": "yarn", // the command to run in a shell
      "restartOn": {
        "files": ["yarn.lock", "**/package.json"], // File globs that trigger this task to restart
        "branch": true, // restart this task when creating a new branch/fork
      }
    },
    "<other-task-id>": {
      "name": "Build Project",
      "command": "yarn build"
    },
    "dev-server": {
      "name": "Start Dev Server",
      "command": "yarn dev",
      // With the `preview` field set, the GitHub App will also add a link
      // to that preview to PRs, and it will become part of a GitHub
      // deployment:
      "preview": {
        "port": 4000,
        "prLink": "direct"
      }
    }
  }
}
```

The task id does not appear on the UI, since each task has a display name configured alongside the command it runs.

### `preview` field

You can define the `preview` field for tasks. By setting the `preview` field, we will directly put a link of the preview for the given task in every GitHub PR (if the [GitHub App](/learn/integrations/github-app) is installed), and we'll create deployments for them.

The `preview` object has two fields: `port` and `prLink`. The `port` field defines the port that this task opens, and the `prLink` defines how PRs should link to this port. The possible options are `direct` and `devtool`.

With `direct`, you will directly open the preview URL from the PR.

With `devtool`, you will open the preview URL with an experimental devtool inside the preview.

Here's an example:

```json
{
  "tasks": {
    "dev-server": {
      "name": "Start Dev Server",
      "command": "yarn dev",
      // With the `preview` field set, the GitHub App will also add a link
      // to that preview to PRs, and it will become part of a GitHub
      // deployment:
      "preview": {
        "port": 4000,
        "prLink": "direct"
      }
    }
  }
}
```

## Examples

### Single page application

```json
{
  "tasks": {
    "run-dev": {
      "name": "App",
      "command": "yarn run dev",
      "runAtStart": true
    }
  }
}
```

### Mono-repo with multiple front-ends

```json
{
  "tasks":{
    "build":{
      "name":"Build Workspace",
      "command":"yarn build:workspace"
    },
    "homepage":{
      "name":"Homepage",
      "command":"yarn workspace homepage dev",
      "runAtStart":true
    },
    "docs":{
      "name":"Docs",
      "command":"yarn workspace docs dev"
    },
    "admin":{
      "name":"Admin",
      "command":"yarn workspace admin dev"
    },
    "dashboard":{
      "name":"Dashboard",
      "command":"yarn workspace dashboard dev"
    }
  }
}
```

## Reference

- setupTasks
  - name
  - command
- tasks
  - task-id
    - name
    - command
    - runAtStart
    - restartOn
      - files
      - branch
    - preview
      - port
      - prLink
