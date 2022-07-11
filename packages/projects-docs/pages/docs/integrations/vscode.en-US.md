---
title: VSCode
description: Open any branch directly in VSCode with your own extensions
---

# VSCode

CodeSandbox Projects has a first-class integration with the VSCode editor. This means that you can open any branch directly in your VSCode editor, where you can use your own extensions while being connected with the CodeSandbox development environment.

## Opening in VSCode

There are multiple ways to open a branch in VSCode. The easiest way is to open the branch in the CodeSandbox editor, and by clicking on "Open in VSCode" in the bottom left.

> TODO: image here

As soon as you click the button, you will be prompted to install the CodeSandbox extension which is responsible for making the connection with the cloud development environment.

## Tips & Tricks

There are multiple tricks you can do to make the experience of VSCode connected to CodeSandbox better.

### Default Workspace Extensions

You can create the file `.vscode/extensions.json` in your repository to define the default extensions that should be installed for the repository. An example:

```json
{
  "recommendations": ["esbenp.prettier-vscode", "dbaeumer.vscode-eslint"]
}
```

This will make sure that Prettier and ESLint are installed whenever someone opens the branch in VSCode.

### Default User Extensions

In case you have any personal extensions that you want to have in every branch, you can define those in your VSCode settings under the setting id `remote.SSH.defaultExtensions`. To change this setting, you can open VSCode settings (`CMD/Ctrl + ,`) and search for `remote.SSH.defaultExtensions`.

You can copy your favourite VSCode extension ids, and put them in that setting. From then on, these extensions will be automatically installed in your branches.

### VSCode Setting Sync

To sync your settings and keybindings between branches, you can enable VSCode Setting Sync. To learn more about how to set this up, you can check [here](https://code.visualstudio.com/docs/editor/settings-sync).

### Reviewing PRs in VSCode

You can review PRs directly from VSCode while connected to CodeSandbox. To do this, you should install the [GitHub App of CodeSandbox](/docs/integrations/github-app). With this app, every PR will have a link to open the branch in VSCode.

We also recommend to install the [GitHub Pull Request](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) extension, and configure it as a default extension in your user settings (as outlined [here](#default-user-extensions)). With this extension you can put comments on GitHub directly from your editor.