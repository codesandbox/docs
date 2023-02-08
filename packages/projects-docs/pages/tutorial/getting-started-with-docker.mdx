---
title: Getting started with Docker
description: Using docker with CodeSandbox
---

import { Callout } from 'nextra-theme-docs'

# Getting started with Docker

Docker is available for Cloud Sandboxes and Repositories. With Docker, you can get `root` access and install any package to use within CodeSandbox, including databases and new languages.

[Here](https://codesandbox.io/p/sandbox/docker-example-hsd8ke) you can find a sandbox that uses Docker.

### 1. Create a Dockerfile

To get started with Docker, you need to create a new file called `Dockerfile` inside the `.codesandbox` folder. As an example, you could put these contents in:

```docker
FROM ubuntu

# Install htop by default
RUN apt update -y && apt install -y htop
```

<Callout>
This Dockerfile is intended for development, not for deployment. This means that you probably don't need to `COPY` or `ADD`. We handle that for you by mounting the project directory at `/workspace` in the container.
</Callout>

<Callout>
At this time, CodeSandbox currently only supports Debian and Ubuntu based images, for the best compatibility and user experience.
</Callout>

### 2. Rebuild the container

Now that you've created a Dockerfile and saved it, you should see a notification pop up, asking you to rebuild the container. Whenever the Dockerfile changes, we need to rebuild the container from that Dockerfile.

![Notification for rebuilding the container](/docker-notification.png)

You can press "Yes", and it will build the container for you. Alternatively you can also rebuild the container by opening the command palette (<kbd>CMD/Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>), and searching for "Rebuild Container".

With a Dockerfile in `.codesandbox`, the VM will also always make sure to create the container when it boots.

### 3. Use the container

Now that the container has been built, all your new terminal sessions will be executed from inside this container. You can test this by opening a new terminal, and verifying that `htop` is installed (from our example).

Note that you also have `root` access inside the terminal, that's because we give root access by default inside a container. With this, you can install new packages and use them in your sandbox from the terminal as well. Keep in mind that it's still better to configure this in the `Dockerfile` in the long term, as these temporary container changes won't persist between Dockerfile rebuilds.

![htop running inside the container](/docker-terminal.png)
