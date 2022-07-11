---
title: Documentation
authors: ['CompuIves', 'Necoline']
slug: /
description: Learn about CodeSandbox Extension in VS Code.
---

<div style={{height:478,width:'100%',background:'var(--docs-accent-color)', borderRadius: '6px'}}>
</div>

# CodeSandbox in VS Code

Tap into the power of CodeSandbox within the comfort of VS Code. Our VS Code extension uses Remote - SSH to spin up code that has been imported to your CodeSandbox account and connects to the CodeSandbox API which powers collaboration and DevTools that integrate seamlessly into your workflow.

# Getting Started

1. If needed, install [Visual Studio Code](https://code.visualstudio.com/) for Windows *(7+)*, macOS *(10.11 +)*, or Linux.
2. Download and install the [CodeSandbox extension](https://marketplace.visualstudio.com/items?itemName=CodeSandbox-io.codesandbox-projects) for Visual Studio Code.
3. Wait for the extension to finish downloading and then reload VS Code when prompted.
4. Click on CodeSandbox icon in the side menu and login 
5. Connect to your project
    
    Select a branch or open a new branch within a project listed in the menu to start working
    
    OR
    
    Open your project in CodeSandbox and select ‘Open in VS Code’
    
    # Extension Features

## Open your branch in VS Code

You can jump to VS Code at anytime from the browser 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/26990097-3aeb-4e75-9e7d-b5f6572dd87a/Untitled.png)

Alternatively, you can do all your work in VS Code without accessing CodeSandbox on the web

1) Open the extension

2) Sign in if you haven’t already

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8c424d02-c6eb-42eb-b675-5893e527cd79/Untitled.png)

2) Select the ‘Projects’ panel and select the project you want to work on. From there you can open a new branch or select an existing branch to open

You will only be able to select from a list of repositories that have been imported to CodeSandbox. If you don’t see your project in the list, check your dashboard on CodeSandbox to make sure everything is set up there first.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3d46c3b8-e889-4fe6-a172-7ec4009450aa/Untitled.png)

If at any point, you want to switch to the CodeSandbox editor, simply click ‘Open in CodeSandbox’ under the ‘Branch Control Panel’

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/79c50a69-3c1d-41ac-88b7-0ad2fa80e036/Untitled.png)

## Live Collaboration

**View collaborators**

Once you are connected to the branch, you will be able to see a list of teammates that are active on the branch. You can see the list of collaborators as well as the environment they are working from. 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3c6a5ee5-b815-46c7-9f5b-e2a5fb5b6691/Untitled.png)

In this case, I am active in both VS Code and the CodeSandbox editor. 

**See collaborations**

Changes that are made to a file are reflected in the editor of every user

[insert video]

## Live Following

Select the name of a collaborator to focus on the file and line that they are working on

[following.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ba41ec94-f116-4561-b626-a8a022af485c/following.mov)

## DevTools

Just like in the CodeSandbox editor, you have access to running ports to view code changes in the browser. 

The available ports are listed in the panel. Clicking on a port will open a tab in your default browser

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ebe9404d-be76-4c46-9185-c360e536daa3/Untitled.png)

## Connection

You can see the status of the ssh connection in the green box in the footer bar. If you are disconnected, you will be prompted to reload

Right of the ssh connection status is the Pitcher status. If this is disconnected, it will not interrupt your access to the code. You won’t, however, be able to view the changes of other collaborators. When Pitcher is disconnected, you will see a modal asking you to reconnect. 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c8f1ccd6-78b7-4f5a-9f82-3796ee086d6a/Untitled.png)

If you opt out, you can always click on the un-synced status to be presented with the option to connect again.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a63b53e0-88fe-46ec-bb4f-d3d9a951c639/Untitled.png)

# How it works

When you connect to your CodeSandbox account and open a branch, a virtual container is spun up with [Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) to allow you to access your code. At the same time, a connection is established with a CodeSandbox API called Pitcher. This is the service that powers all of the collaboration features across different editors including the web and mobile. 

It is possible to work on the ssh connection while disconnected to Pitcher, but you should be mindful that other team members may be making changes to your branch while you are in an un-synced state, so be sure to commit often.

Only people on your team in CodeSandbox have access to these repositories. 

So the VSCode Extension actually connects directly to the container with an SSH connection, completely bypassing Pitcher, where it operates directly with the FileSystem.
On top of this we also connect to Pitcher, just like we do in the browser, where we "tie it together".

# FAQs

## What to do about that recurring trust modal?

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2cd18d1a-b838-4005-9002-2bf0090a2657/Untitled.png)

This modal shows up every time you launch a project folder in a new container. Since every branch will be opened with a unique SSH url, VS Code will ask you to verify that you trust the connection. This is an important security notice used to confirm that the user understands the  connection being established before opening the code. You can read more about the modal [here](https://code.visualstudio.com/blogs/2021/07/06/workspace-trust).

## Do I have to be connected to live session on CodeSandbox in order to work on a branch?

It is possible to work in an “un-synced” state. In order for CodeSandbox features to work, the branch needs to established on a remote connection AND connected to Pitcher (see How it works for more information

## Who can access my code?

Only people on your CodeSandbox team with permissions to the repository may join as a collaborator. Repository permissions are carried over from Github. To add someone new to the team, provide access on Github and add them to the CodeSandbox. From there, they can access the code in the browser or follow the steps above to use VS Code.

# More Questions?

For questions and support please use the community [discord server](https://discord.gg/R32XxEGp4s).

