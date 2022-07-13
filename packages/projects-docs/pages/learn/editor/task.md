---
title: Task
description: 
---

import Callout from 'nextra-theme-docs/callout'

# Task

![CodeSandbox Projects Task](../images/devtools-cover-tasks.jpg)

Tasks allow you to define commands (like `yarn start`) that you can run in a single click or on setup. These tasks are shared between all the clients connected to that branch.

## Add new task

To add a new task and make it available from the menu, go to the Devtools dropdown, select `Tasks` and click on `New Task`. It will open the command palette where you can type the desired command and press enter. 

<Callout emoji="⭑">
To make a task available to all branches, you need to commit and merge the `task.json` to main.
</Callout>

## Configure

To have more control over the tasks, check out the documentation about [configuring the `task.json` file](../setting-up/tasks).