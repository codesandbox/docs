---
title: Docker Integration
description: CodeSandbox integrates with Docker, allowing you to install any package you want, including databases and new languages.
---

import { Callout } from 'nextra-theme-docs'

# Docker Integration

CodeSandbox has a native integration with Docker. This means that you can use Docker to install any package you want, including databases and new languages. Additionally, with the Docker integration you have root access within your terminals, so you can install packages from the terminal as well.

While we call this a Docker integration, we use rootless [Podman](https://podman.io/) to run the containers.

You can find an example of a sandbox that uses Docker [here](https://codesandbox.io/p/sandbox/docker-example-hsd8ke).

## Configuring Docker

To enable the Docker integration, you need to create a new file in `.codesandbox/Dockerfile`, this is the Dockerfile that will be used to build the container for the environment. Whenever you open a new terminal, you will be inside this container.

When this file exists, we will also make sure to automatically rebuild the container when the VM boots.

<Callout emoji="⭑">
For a step-by-step guide, check out our tutorial [Getting started with Docker](/tutorial/getting-started-with-docker)
</Callout>

## How it works

With CodeSandbox, we allow you to share your sandbox with others easily by sharing a link. Because of this, we make sure to create a new Linux user for every user that opens the sandbox.

This means that we also have to run containers on a per-user basis. For every user, we create a rootless container using Podman based on the `Dockerfile` configuration in the sandbox/repo. While the user outside of the container does not have root, inside the container they do have root access.

Whenever you open a terminal, we check if there is a container running for your user. If it's not running, we start it, and we then start an `exec` session inside the container.

Every container does share the network, files and processes between each-other. This allows you to run an HTTP server in one container, and connect to it from another container.
