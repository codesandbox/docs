---
title: Install system packages
description: Install system packages inside CodeSandbox Repositories as you're used to do on Linux or Mac.
---

import { Callout } from 'nextra-theme-docs'

# Install system packages

When using some modules or tools, you may want to install some packages. Unfortunately, due to security reasons, you can't run commands using `sudo` in CodeSandbox Repositories - but you can use Nix as a drop-in replacement. You can read about this more on the [workspace limitations page](../../learn/setting-up/limitations).

Fortunately, [Nix](https://nixos.org/) provides most of the packages that you will likely need. You just have to replace the commands for `sudo apt-get install` or `sudo apt install` with `nix-env -i` - that's all. You can check out the available packages in Nix on [https://search.nixos.org/packages](https://search.nixos.org/packages).

For example, to install Google Chrome on Debian, you would use `sudo apt install chromium`. In CodeSandbox Repositories, just run `nix-env -i chromium` and you will get the same result.

<Callout emoji="⭑">
Tip: Don't forget to add this command as a [setup task](../../learn/setting-up/tasks) so that you don't have to run this command on every newly created branch. CodeSandbox Repositories will make it available for you immediately!
</Callout>

As an alternative approach to installing packages, you can define a file in the root of your project called `csb.nix` and configure which packages should be automatically installed from the [Nix package store](https://search.nixos.org/packages). To use this configuration on every branch, you have to commit this file back to your main branch.

See an example configuration below:

```nix
with import <nixpkgs> {};

stdenv.mkDerivation {
    name = "csb";
    buildInputs = [
        chromium
        postgres
    ];
    shellHook = ''
        export PATH="$PWD/node_modules/.bin/:$PATH"
    '';
}
```




