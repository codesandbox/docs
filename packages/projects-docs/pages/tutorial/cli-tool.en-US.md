---
title: Install CLI tools and global modules
description:
---

import Callout from 'nextra-theme-docs/callout'

# Install CLI tools and global modules

Please note due to security reasons in Projects you can’t run commands using sudo. On the other hand, we know it’s really important to set up your workspace as you wish and install additional tooling.

By default `npm install -g` installs global modules into `/usr/local/lib/node_modules`
 and links executables into `/usr/local/bin`. So in Projects for these folders you have write access and you can install additional tools.

Probably you’d like to install some frameworks that require write access to many more folders. So in cases like this, we recommend using Docker or NixOS 

[Getting started with Docker and NixOS in Projects](https://www.notion.so/Getting-started-with-Docker-and-NixOS-in-Projects-2e02214259114e0e9a3e863804af4025)

## 1. Click on + New task to install new tooling

![https://images.tango.us/public/screenshot_3bdf3563-7a95-4969-b7da-6b96ae07e536.png?crop=focalpoint&fit=crop&fp-x=0.9512&fp-y=0.1775&fp-z=3.0619&w=1200&ar=3892%3A3008](https://images.tango.us/public/screenshot_3bdf3563-7a95-4969-b7da-6b96ae07e536.png?crop=focalpoint&fit=crop&fp-x=0.9512&fp-y=0.1775&fp-z=3.0619&w=1200&ar=3892%3A3008)

## 2. Drop here the command that installs the global module

![https://images.tango.us/public/screenshot_434878b2-cd08-4b6a-91bf-d03056e07d9f.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.1577&fp-z=1.6881&w=1200&ar=3892%3A3008](https://images.tango.us/public/screenshot_434878b2-cd08-4b6a-91bf-d03056e07d9f.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.1577&fp-z=1.6881&w=1200&ar=3892%3A3008)

## 3. You can see the progress of the installation in a console log.

![https://images.tango.us/public/screenshot_2c94b9c2-a668-427f-b7fa-bfcd60de9f29.png?crop=focalpoint&fit=crop&fp-x=0.7831&fp-y=0.2096&fp-z=2.3839&w=1200&ar=3892%3A3008](https://images.tango.us/public/screenshot_2c94b9c2-a668-427f-b7fa-bfcd60de9f29.png?crop=focalpoint&fit=crop&fp-x=0.7831&fp-y=0.2096&fp-z=2.3839&w=1200&ar=3892%3A3008)

## 4. In the meantime a tasks.json file has been created under the .codesandbox folder

With the tasks.json you can automate the creation of your development environment within Projects

![https://images.tango.us/public/screenshot_b1d911c4-953b-4648-a7c7-d72862a272b8.png?crop=focalpoint&fit=crop&fp-x=0.0812&fp-y=0.0938&fp-z=2.2900&w=1200&ar=3892%3A3008](https://images.tango.us/public/screenshot_b1d911c4-953b-4648-a7c7-d72862a272b8.png?crop=focalpoint&fit=crop&fp-x=0.0812&fp-y=0.0938&fp-z=2.2900&w=1200&ar=3892%3A3008)

## 5. By default, your tool saved as a simple task

You can run tasks from the UI or the Command Palette but global modules should be installed during setting up your environment.

![https://images.tango.us/public/screenshot_69be5dc2-5bc6-43f2-84c6-be9631c1178a.png?crop=focalpoint&fit=crop&fp-x=0.2885&fp-y=0.5402&fp-z=3.1717&w=1200&ar=3892%3A3008](https://images.tango.us/public/screenshot_69be5dc2-5bc6-43f2-84c6-be9631c1178a.png?crop=focalpoint&fit=crop&fp-x=0.2885&fp-y=0.5402&fp-z=3.1717&w=1200&ar=3892%3A3008)

## 6. Let's move it under the setupTasks

So setupTasks will run every time Projects is setting up your workspace. What you have to do now is move the command up to under setupTasks. Also, don't forget to clean up tasks as you don't have to move every part of that entry created there.

<Callout>
Tip: Make sure you commit back this file to your main branch. Only this way tasks will be picked up next time you create a new branch!
</Callout>

![https://images.tango.us/public/screenshot_4f27ab2c-2911-4294-924f-67a13e3139e1.png?crop=focalpoint&fit=crop&fp-x=0.3009&fp-y=0.2304&fp-z=2.1571&w=1200&ar=3892%3A3008](https://images.tango.us/public/screenshot_4f27ab2c-2911-4294-924f-67a13e3139e1.png?crop=focalpoint&fit=crop&fp-x=0.3009&fp-y=0.2304&fp-z=2.1571&w=1200&ar=3892%3A3008)