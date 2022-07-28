---
title: task.json
description:
---

import Callout from 'nextra-theme-docs/callout'

# .codesandbox/tasks.json

CodeSandox Projects can be configured through the `.codesandbox/tasks.json` configuration file in your project. This file defines the steps to set up VMs and configures the running commands inside the workspace (webservers, Docker containers, tests etc.). 

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

By default, CodeSandbox Projects tries to infer scripts from the `package.json` file in your project's root folder. In addition, you can always use the terminal devtool to execute any shell script to run your project.

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
      "command": "yarn" // the command to run in a shell
    },
    "<other-task-id>": {
      "name": "Build Project",
      "command": "yarn build"
    }
  }
}
```

This id does not appear on the UI, since each task has a display name configured alongside the command it runs.

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
	"tasks": {
		"build": {
			"name": "Build Workspace",
			"command": "yarn build:workspace"
		},
    "homepage": {
      "name": "Homepage",
      "command": "yarn workspace homepage dev",
			"runAtStart": true
    },
		"docs": {
      "name": "Docs",
      "command": "yarn workspace docs dev"
    },
		"admin": {
      "name": "Admin",
      "command": "yarn workspace admin dev"
    },
		"dashboard": {
      "name": "Dashboard",
      "command": "yarn workspace dashboard dev"
    }
	}
}
```


## Reference

* setupTasks
  * name
  * command
  
* tasks
  * task-id
    * name
    * command
    * runAtStart
    * preview
      * port
      * pr-link