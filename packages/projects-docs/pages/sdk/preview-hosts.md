---
title: Preview Hosts
description: Learn about preview hosts in CodeSandbox SDK.
---

import { Callout } from 'nextra-theme-docs'

# Preview Hosts

If you are using the [Browser Preview API](./browser-previews), you will need to set allowed preview hosts. This is done using the SDK CLI. The hosts are stored on your workspace and applies to all your Sandboxes.

```bash
$ csb preview-hosts --list

$ csb preview-hosts --add :host

$ csb preview-hosts --remove :host

$ csb preview-hosts --clear
```

The `:host` is a JavaScript RegEx. Meaning you can do things like: `my-project-.*-.*.vercel.app` for example.
