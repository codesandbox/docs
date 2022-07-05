---
title: Environment configuration
description: Configure your environment in CodeSandbox Projects
---

import Callout from 'nextra-theme-docs/callout'

# Environment configuration

With the environment file you can configure various aspects of the running VMs. Currently the config allows you to set a specific `nodeVersion` , but more options will be available in the future.

# Getting started

1. Create a new file: `.codesandbox/environment.json`
2. Add your configuration
3. Save the file
4. Commit/Push the file to persist changes when restarting the VM - this is needed to ensure every newly created branch will use the new configuration
5. Open sidebar menu → Restart VM

# Supported configuration

### NodeJS

<Callout>
If you have already a .nvmrc file containing a node version number in your project's root folder then it will be automatically picked up by CodeSandbox Projects.
</Callout>

The environment file allows you to specify:

- nodeVersion

```json
{
  "nodeVersion": "14"
}
```

### Node Version

Single value configuration, type `string`, by default it is set to `"16"` .