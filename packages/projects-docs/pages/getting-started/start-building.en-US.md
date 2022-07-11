import Callout from 'nextra-theme-docs/callout'
  
# Start building

After you've imported a repository or created a new project from a template, Projects will create a development environment, sync it to GitHub and immediately create a new branch.

    <Callout emoji="⏰">
       Installing the dependencies and running your project may take some time depending on the project's size. We will create a snapshot immediately after the first load, so the following forks and starts will be instant.
    </Callout>
    
    
**Once your development workspace is loaded, you will notice a webserver is running already.**

Ideally, a webserver will run and you will be able to access it using the Preview. Projects will try to infer scripts from your `package.json` file but if it's not presented in the root folder you will have to define it as a **task**. You can add setup processes, terminals, previews or even additional DevTools once available.

## Defining tasks


1. In the Editor, click on the **`+`** icon in the top right corner to **add new Devtools.** 
    
1. Click on **`New Task`** in the Task submenu. A task can be any command that you usually run in the terminal. After defining a task, you can run it from the UI or from the Command Palette as well.
    
1. **Type a Command** and save it as a task.


