---
title: Task
description: 
---

import Callout from 'nextra-theme-docs/callout'

# Task

![CodeSandbox Projects Task](../images/devtools-cover-tasks.png)

Tasks allow you to define commands (like `yarn start`) that you can run in a single click or on setup. These tasks are shared between all the clients connected to that branch.

## Add new task

To add a new task and make it available, you can go to the [devtools dropdown](a), select `Tasks` and click on `+ New Task.` It will open the command palette. Inside it, you can write the command you want to execute and press enter. 

<Callout>
To make this task available in all branches, you need to commit and merge the `task.json`
</Callout>

## Configure

To have more control over the tasks you can check the documentation about the [`task.json`](a) file