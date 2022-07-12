---
title: Permissions
description: How to manage access control in CodeSandbox Projects
---

import Callout from 'nextra-theme-docs/callout'

# Roles and Permissions

## User roles

You can consider the different user roles below who can interact or visit Projects. Please read more about the permissions [here](https://codesandbox.io/docs/projects/teams/permissions).

### Users with write access to your repository

Users with write access to the given repository can unleash the full potential of CodeSandbox Projects and use it for their development workflow.

### Users with read-only access to your repository

Users with read-only access to the given repository can still browse the content of your project, check the previews, or even execute different tasks. For sure, they can't introduce changes but there is an option for them to create a fork and then run the project by their own without affecting the upstream repository. Furthemore, they can even contribute back to the original projects easily with CodeSandbox Projects. You can read more about this on the [open source contrubution page](https://codesandbox.io/docs/projects/docs/getting-started/open-source-collaboration).

### Anonymous users

CodeSandbox Projects also provides an option to make a project accessible for users without a CodeSandbox Account. Anonymous users can also open a public repository from GitHub if it's imported to Projects already. 


## Permissions

The following table outlines the permissions for each role.

| Feature | User with write permissions | Read-only access | Anonymous |
|---------|-----------------------------|------------------|-----------|
|  Import repository       |               ✔️              |          ❌ - Fork only        |     ❌      |
|   Visit a public project      |             ✔️                |        ✔️          |      ✔️     |
|   Browse content in a public project      |             ✔️                |        ✔️          |      ✔️     |
|   Access previews for a public project      |             ✔️                |        ✔️          |      ✔️     |
|   Visit a private project      |             ✔️                |        ✔️  - with explicit permissions        |      ❌     |
|   Create new branch      |             ✔️                |        ❌        |      ❌     |
|   Perform any git operation      |             ✔️                |        ❌        |      ❌     |
|   Open the terminal      |             ✔️                |        ❌        |      ❌     |
|   Manage environment variables and secrets      |             ✔️                |        ❌        |      ❌     |
|   Run existing tasks     |             ✔️                |        ✔️        |      ✔️     |
|   Create new tasks     |             ✔️                |        ❌         |      ❌     |
|   Change exiting tasks     |             ✔️                |        ❌         |      ❌     |
|   Open DevTools    |             ✔️                |        ✔️         |      ✔️     |
|   Make changes    |             ✔️                |        ❌        |      ❌     |
|   Open a pull request    |             ✔️                |        ❌        |      ❌     |
|   Install the GitHub action    |             ✔️                |        ❌        |      ❌     |
|   Install the GitHub application    |             ✔️                |        ❌        |      ❌     |
|   Follow mode   |             ✔️                |        ✔️        |      ✔️     |