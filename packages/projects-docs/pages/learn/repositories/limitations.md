---
title: Limitations
description: Current limitations of Repositories in CodeSandbox.
---

import Callout from 'nextra-theme-docs/callout'

# Limitations

## sudo access

Typically, sudo access allows users to run programs with the privileges of another user - by default, the superuser. Currently, due to security reasons, CodeSandbox repositories don't provide an option to run sudo commands. This is necessary to provide you with collaboration features on top of the ephemeral developer environment experience.

### Workarounds

To work around this, there are two ways to install packages.

#### NixOS

CodeSandbox natively supports the [Nix](https://nixos.org/) package manager. To install a package, you can define a file in the root of your project called `csb.nix` and configure which packages should be automatically installed from the [nix package store](https://search.nixos.org/packages).

See an example configuration below:

```nix
with import <nixpkgs> {};

stdenv.mkDerivation {
    name = "csb";
    buildInputs = [
        postgres
        htop
    ];
    shellHook = ''
        export PATH="$PWD/node_modules/.bin/:$PATH"
    '';
}
```

This automatically installs Postgres and `htop` the next time you open a terminal. An example of a project running Nix can be found [here](https://codesandbox.io/p/github/codesandbox/test-sandbox/main).

#### Docker

We also support running Docker. You can run `docker` directly from the terminal, and within the Docker containers to which you **do** have root access.
