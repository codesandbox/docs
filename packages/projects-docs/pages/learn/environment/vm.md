---
title: VM Configuration & Persistence
description: The specs of our VMs and how we persist files
---

import { Callout } from 'nextra-theme-docs'

# Environment

## Default resources

Based on our analysis of usual resource needs, we have defined these resources as default:

| Type    | Limit  |
| ------- | ------ |
| CPU     | 4 vCPU |
| Memory  | 4Gi    |
| Storage | 8Gi    |

But we can go higher, up to 12vCPUs, 16GB memory and 30GB storage. If you hit any limitations while using CodeSandbox, [get in touch](mailto:support@codesandbox.io) and our team will adjust the limits to suit your project.

## Persistence

Everything you save in `/project` is guaranteed to be persisted between reboots, hibernations and forks. Every file change outside of `/project` will usually be persisted, but there is a chance that those changes will be cleared.

Your project folder lives in `/project/<repo-name>`, your home folder lives in `/project/home/<username>`. Your home folder is inaccessible for other users.

If your branch has not been accessed for 31 days, we delete the contents of `/project`. This means that the next time you start this branch again, we will reinitialize `/project` by doing a fresh clone.

For any uncommitted work we make a backup. This backup is never deleted. All your uncommitted work is restored when you open a branch where the `/project` folder is deleted. This means that you will never lose your work, even if we delete `/project` after 31 days of inactivity.

Memory snapshots (which allow instant resume of VMs) will be cleaned up after 7 to 31 days of inactivity. There is no lost work from cleaning up memory snapshots.

## Node Modules

The `node_modules` folder is globally ignored. You can override this behaviour by adding `!node_modules` in your own project `.gitignore` file. While this will add `node_modules` folders to git, they won't be displayed in the UI.

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

<Callout emoji="⭑">
If you already have a `.nvmrc` file containing a Node version number in your project's root folder it will automatically be picked up by CodeSandbox.
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

CodeSandbox supports running Docker containers inside any workspace. You can learn more about our Docker support in our [Docker documentation](/learn/environment/docker).

<Callout emoji="⭑">
For a step-by-step guide, check out our tutorial [Getting started with Docker](/tutorial/getting-started-with-docker)
</Callout>

## Nix support

[Nix](https://nixos.org/) is a tool that takes a unique approach to package management and system configuration. Use it to install any additional tools, like go, java, or system packages, inside your workspace.

You can put a file called `csb.nix` in the root of the project. This is an example configuration file for installing Python:

```nix
with import <nixpkgs> {};

stdenv.mkDerivation {
    name = "csb";
    buildInputs = [
        python310
    ];
}
```
