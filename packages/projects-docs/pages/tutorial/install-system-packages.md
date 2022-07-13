---
title: Install system packages
description: Install system packages inside CodeSandbox Projects as you're used to do on linux or mac
---

import Callout from 'nextra-theme-docs/callout'

# Install system packages

For many modules or tools probably you'd like to install some packages. Unfortunately, due to security reasons in Projects you can’t run commands using sudo but you can use Nix as a drop in replacement. You can read about this more on the [workspace limitations page](https://codesandbox.io/docs/projects/learn/setting-up/limitations). 
Actually, most of the packages are available in [Nix](https://nixos.org/) as well so what you have to do is replace the `sudo apt-get install` or `sudo apt install` to `nix-env -i`, and that's all. You can check out the available packages in Nix on [https://search.nixos.org/packages](https://search.nixos.org/packages).

For example, you can install Google Chrome as you see below:

On Debian you can run: `sudo apt install chromium`

Inside CodeSandbox Projects just run `nix-env -i chromium`

<Callout emoji="⭑">
Tip: Don't forget to add this command as a [setup task](https://codesandbox.io/docs/projects/learn/setting-up/tasks) so you don't have to run this command on every newly created branch, Projects will make it available for you immediately!
</Callout>

As an alternative apporach to install packages, you can define a file in the root of your project called `csb.nix` and configure which packages should be automatically installed from the [nix package store](https://search.nixos.org/packages). In order to use this configuration on every branch you have to commit this file back to your main branch.

An example configuration is this:

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




