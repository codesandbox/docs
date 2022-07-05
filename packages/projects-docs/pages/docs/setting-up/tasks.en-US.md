---
title: Task.json
description:
---

# Tasks.json

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

## Setup Tasks

Array of commands that will run sequentially before the workspace will be ready to start your application. If no value is provided, installing dependencies will be the default task (we will detect which package manager you use).

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

Tasks are  scripts that can be run inside your project. In many cases these will call the scripts in your `package.json`, but they can also be used to run other executables.

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

This id does not appear on the UI, since each task has a display name configured along side the command it runs.

## Examples 

### A single page application

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

### A mono-repo with multiple frontends

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