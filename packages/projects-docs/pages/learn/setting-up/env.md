---
title: Environment
description: Configure your environment in CodeSandbox Projects
---

import Callout from 'nextra-theme-docs/callout'

# Environment

## Default resources

Based on our analysis of usual resource needs, we have defined these resources as default: 

| Type | Limit |
|------|-------|
| CPU  |  4 vCPU     |
|  Memory    |   4Gi    |
|  Storage    |   8Gi    |

If you hit any limitations while using Projects Beta, [get in touch](mailto:support@codesandbox.io) and our team will adjust the limitations to suit your project.

## Environment configuration

Configure various aspects of the running VMs with the environment file. Currently the config allows you to set a specific `nodeVersion`, but more options will be available in the future.

### Getting started

1. Create a new file: `.codesandbox/environment.json`.
2. Add your configuration.
3. Save the file.
4. Commit/Push the file to persist changes when restarting the VM - this is needed to ensure every newly created branch will use the new configuration.
5. Open the sidebar menu and click on `Restart`.

### Supported configuration

#### NodeJS

<Callout>
If you already have a `.nvmrc` file containing a node version number in your project's root folder it will automatically be picked up by CodeSandbox Projects.
</Callout>

The environment file allows you to specify:

**nodeVersion**

```json
{
  "nodeVersion": "14"
}
```

Single value configuration, type `string`, by default it is set to `"16"` .


## Docker support 

CodeSandbox Projects supports running docker containers inside any workspace. Run and build images to run containers inside your project by opening a terminal and running `docker`. If you have a docker-compose file in your root folder, simply run `docker-compose up` and all your services will run within Projects.

<Callout>
For a step-by-step guide, check out our tutorial: [Getting started with Docker](https://codesandbox.io/docs/projects/tutorial/docker)
</Callout>

## Nix support

[Nix](https://nixos.org/) is a tool that takes a unique approach to package management and system configuration. Use it to install any additional tools, like go, java, or system packages, inside your workspace.