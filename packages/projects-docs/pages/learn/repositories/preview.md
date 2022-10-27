---
title: Preview
description: 
---

# Preview

![CodeSandbox Preview](../images/devtools-cover-preview.jpg)

When a running task that opens a server on a port, that port will be attached to the task, turning it into a Preview-type DevTool. Previews appear at the beginning of the list when you toggle the DevTools dropdown. 

## How do Previews work?

### WebSocket Override

We’ve patched WebSocket to ensure that the right URL is always accessed when opening a websocket. In case you try to access [`http://localhost:3000`](http://localhost:3000) using a websocket, we’ll rewrite it to `https://3000-:id.preview.csb.app` so the socket automatically connects to the right URL.

This will often make hot module reloading work out of the box for frameworks like Vite.

### Service Worker Proxy

If possible, we try to install a service worker in the preview that will proxy requests to [`localhost:3000`](http://localhost:3000) to the corresponding dev URL. The service worker only proxies URLs that are going to localhost, or URLs that go to e.g. `https://3000-:id.preview.csb.app:4000`.