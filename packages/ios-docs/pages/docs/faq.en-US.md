# FAQ

## Sandboxes

### I'm getting a Git error resolving a dependency. Why is that?
CodeSandbox for iOS is only compatible with dependencies hosted and accessible via HTTP or HTTPS. This is because the app doesn't provide local shell environments where you can run arbitrary commands, like git. Use CodeSandbox Projects instead.

You may find some of the following answers helpful if you have gone through the sections in this documentation but you still haven’t cleared your doubts:
    
### I'm getting an error trying to run my sandbox in CodeSandbox for iOS. What could be the cause?

The root cause of the problem could be either a coding mistake on your side or a dependency trying to do something forbidden by iOS. For instance, dependencies relying on WebAssembly won't work as WebAssembly requires JIT compilation to function, and this isn't allowed by the App Store guidelines. Another cause can be that your project or one of its dependencies rely on a native dependency or Node extension, which aren’t supported.

### One of the scripts in my sandbox cannot be run. What could be the cause?

Only the scripts that start with `node` or the name of a dependency located inside the `node_modules/.bin` directory are compatible. This is because CodeSandbox for iOS doesn’t provide a shell environment, scripts containing an arbitrary bash command won't work.

### I can't see the preview of my sandbox in the web browser. What could be the cause?

The runtime provides a `WEB_PORT` environment variable matching the port used by default by the in-app web browser. If your sandbox doesn't use the port in that environment variable then you will need to fix the url in the web browser to load the page at the right port.

### My sandbox stops running when I move the app to background. Why is that?
This is because iOS suspends the process while the application is in background and with it all its activity.

### My sandbox requires Node.js 14 but the app uses Node.js 12. How can I change the Node.js version?
The application uses a Node.js port that hasn’t been upgraded to Node.js 14 as we have been focused on integrating CodeSandbox Projects instead. We will be making changes in this front so please stay tuned.

## Projects

### I cannot make any changes to my project. Why is that?
It is very likely that you have a protected branch selected (i.e. main). Forking a branch will create a new one where you can make changes.