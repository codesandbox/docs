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

## Setting up preview links
The GitHub App reads `tasks.json` for preview links. You can add links to the PR description by adding the following fields to the tasks that you want run as a preview:

```
"preview": {
  "port": 3000,
  "pr-link": "direct" | "redirect" | "devtool"
  }
```

In the list of tasks it would look something like this
```
"dev": {
  "name": "dev",
  "command": "yarn dev",
  "runAtStart": true,
  "preview": {
    "port": 4000,
    "pr-link": "direct"
  }
},
"build": {
  ...
}
  ```
  
Note: If you do not have a `tasks.json` file, you can see instructions [here](../setting-up/tasks#opening-configuration) on how to open the tasks configuration.

### port: Optional
This field allows you to determine which port will be used for the preview. This is great for ensuring that the preview url is always the same. If this is not listed as a field, the preview will open on any available port which my be different each time.

### pr-link: Required

**devtool**
This options wraps preview with preview devtools. This means that the link will open the preview from the process running the branch.
It's recommended to use this options for previews that show changes that would get immediate attention from a team member. 
For example, you have been working on a change and want a quick review from a designer that will open the PR and click on the preview link and provide you feedback.

**redirect:**
This option will check to see if the preview devtool is running and then directs you to the devtool or the redirect to the direct link if it is not.
It's recommended to use this option if you want to rely on the running devtool when possible, but need the preview to be available at anytime regardless of the whether or not the branch is up and running. For example, this is great for team reviews that are happening over the course of a few hours or days.

**direct:** 
This will point directly to a process that is running independent of the branch.
It's recommended to use this options if it is unlikely that the branch is up and running when the preview is being opened. For example, you might want to have a preview available on a parent branch that a team member or stakeholder checks periodically to see the latest updates.







## Privacy and Permissions
The GitHub App allows CodeSandbox to retrieve some information about your GitHub account and, in some circumstances, to make changes on GitHub on your behalf. 

Users can select specific repositories or grant access to all repositories in an organization. This selection can be changed time through [GitHub Settings](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/authorizing-github-apps).

For more information, check out the  [GitHub App documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/authorizing-github-apps)

## FAQs

#### I approved a GitHub OAuth App when I created my CodeSandbox account. Why do I need another GitHub integration?
This GitHub App is different from the OAuth integration required by Sandboxes and Projects. The [OAuth integration](https://gitHub.com/settings/connections/applications/c07a89833b557afc7be2) allows CodeSandbox to import repositories from GitHub, while the GitHub App allows CodeSandbox to provide the features listed above.

