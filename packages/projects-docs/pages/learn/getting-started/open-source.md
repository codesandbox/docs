---
title: Open Source Collaboration
description:
---

import Callout from 'nextra-theme-docs/callout'


# Open Source Collaboration

Suggesting changes to your favorite Open Source repositories is easier with CodeSandbox. Whether you are just checking out a repository that you might use, testing out an idea or formally proposing a feature, CodeSandbox OS can elimiate tedious steps in your process and get you working on your ideas faster.


## Viewing Open Source repositories
Explore any open source repository through CodeSandbox simply by adding the repository's GitHub URL to the end of the codesandbox URL, in the format below:

<Callout emoji="🌐">`codesandbox.io/p/` `github/[org]/[reponame]`</Callout>

For example: [codesandbox.io/p/github/codesandbox/sandpack/](https://codesandbox.io/p/github/codesandbox/sandpack)


## Forking Open Source Repositories
Traditionally, contributing to an open source repository happens through forking. You can fork an open source repository by opening it in the editor, clicking in the `Branch` dropdown in top right corner in the editor and by selecting the `Fork repository` option.

![Fork from editor](../images/fork-from-editor.jpg)

You can also create a fork by importing the repository using the `+ New project` button in the team page. If you try to import a repository that you don't have write access to, CodeSandbox will detect this and automatically create a new fork. You will be then be able to decide where to create this repository on GitHub. 

![Create New Fork](../images/import-flow.jpg)

By default, when opening a PR, forked repositories point to the parent repository. 


## Introducing Contribution Branches
Easier and faster than forking repositories, contribution branches allow you to interact with the code and open PRs without the need to import or create a project. 

![Contribution Branch](../images/contribution-branch.jpg)

Contribution branches are standalone branches that are not connected to any project. They were designed to simplify the contributing process and PRs created from them will target the parent repository, appearing on the maintainers' list of open PRs just like any regular PR. 

To create a contribution branch, open the repository in the editor and click in the `Branch` button in top right corner. By default, the option `Create contribution branch` will be selected.

![Crate a Contribution Branch](../images/contribution-from-editor.jpg)

If you try to import a repository you don't have write permission to, a new fork will be automatically created. However, during the import process you can select the option to `Create a Contribution Branch` and choose this option instead to start working immediately.


Your contribution branches are acessible at anytime in the  `Personal projects` section in the [Projects Dashboard](https://codesandbox.io/p/dashboard).
