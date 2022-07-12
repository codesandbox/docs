---
title: Open Source Collaboration
description:
wip: true
---

# Open Source Collaboration

Suggesting changes to your favorite Open Source repositories is made easier with CodeSandbox. Whether you are having a look around a repository that you are using, testing out an idea for a change or formally proposing a feature, CodeSandbox OS contribution branches can elimiate tedious steps in your process and get you working on your ideas faster.

## Viewing Open Source Repositories
Explore any open source repo simply by accessing it through CodeSandbox. Simply add the repo url to the end of the codesandbox url like so:

`codesandbox.io/p/github/[org]/[reponame]`

An example [codesandbox.io/p/github/codesandbox/sandpack/](https://codesandbox.io/p/github/codesandbox/sandpack)

## Forking Open Source Repositories
Traditionally, we think of contributing to open source through forking. If you import a repository that you don't have write access to, CodeSandbox will detect this and fork the repository. 

The import flow will look slightly different. 
[image: create fork]

When you open a PR, forked repositories will by default point to the parent repository. 
[image: PR pointing to parent]

## Contribution Branches
Even easier than forking a repository, contribution branches allow you to interact with the code and open PRs without needing to create a project. 
Contribution branches are stand-alone branches that are not connected to any project intended to simplify the contrb process. 
[image: open menu showing open contribtion branch on read-only repo]

Contribution branches behave like any other branch on a project with the exception that they exist entirely on their own. 

Contribution branches will be listed in the dashboard under personal projects. 
[image]

PRs created from contribution branches will target the parent repository. 
[image]

These PRs will appear on the maintainers list of open PRs just like any other PR.
[image]
