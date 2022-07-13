---
title: GitHub App
description: GitHub integration that adds CodeSandbox links in GitHub pull request descriptions.
---

# GitHub App


The integration of CodeSandbox and GitHub allows you to automatically add links to each PR description to facilitate the review process. 


![GitHub and CodeSandbox Integration](../images/GH-App-integration.jpg)


#### Open Preview
This link will start up a stand-alone devtool that spins up the preview link.

#### Open in Web Editor
This link opens the branch in the CodeSandbox Projects Web Editor. Because the branch is a shared environment, you will be able to see any running previews, tests or other DevTools that the PR author left open to assist with the review process.

#### Open in VS Code Extension
If VS Code is your preferred development environment, you can still open the branch directly from this link using [remote-ssh](https://code.visualstudio.com/docs/remote/ssh).



## Installing GitHub Apps

![Installing GitHub Apps](../images/GH-App-standalone.jpg)
The installation of the GitHub App can only be done by **organization admins** or **repository owners**. However, it is possible to request that a GitHub App be installed in repositories where you don't have the necessary permissions. Organization owners and repository admins will be notified to approve or deny these requests.  

After the installation request is made, the owner of the repository or an admin on the organization will be notified on GitHub and via email. 

- Installation request that appears when importing a repo for the first time.
- GitHub alls can be installed on an organization level or for individual repositories

## Privacy and Permissions
The GitHub App allows CodeSandbox to retrieve some information about your GitHub account and, in some circumstances, to make changes on GitHub on your behalf. 

Users can select specific repositories or grant access to all repositories in an organization. This selection can be changed time through [GitHub Settings](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/authorizing-github-apps).

For more information, check out the  [GitHub App documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/authorizing-github-apps)

## FAQs

#### I approved a GitHub OAuth App when I created my CodeSandbox account. Why do I need another GitHub integration?
This GitHub App is different from the OAuth integration required by Sandboxes and Projects. The [OAuth integration](https://gitHub.com/settings/connections/applications/c07a89833b557afc7be2) allows CodeSandbox to import repositories from GitHub, while the GitHub App allows CodeSandbox to provide the features listed above.

