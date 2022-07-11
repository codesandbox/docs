import Callout from 'nextra-theme-docs/callout'

# Start your first Project

1. **Go to the new [CodeSandbox Project Dashboard](https://codesandbox.io/p/dashboard)**

1. **Select the team (personal or another team) you want to import or create a project for.**
  If you want to create a new team you can do so from the [Sandbox Dashboard](https://codesandbox.io/dashboard)
    
1. **From the dropdown pick your personal account or a GitHub organization where you'd like to import a new project to**

1. **Authorize additional GitHub Organizations if needed**
  If not all your GitHub Organizations are listed here please click on the Manage GitHub integrations and grant the missing permissions on GitHub.
    
1. **Click on Import**
  By clicking on the Import button, Projects will create a development environment, pull your repository from GitHub, and create a new branch right away.

1. **Once your development workspace is loaded you will see a webserver is running already**
    <Callout emoji="👉">
        Please note, based on your project's size, installing all the dependencies and running your project take some time. We'll create a snapshot right after, so the following forks and starts will be instant.
    </Callout>
    
    Ideally, a webserver will run at the end and you will be able to access it using the Preview. Here Projects is trying to infer scripts from your package.json but if it's not presented in the root folder you have to define it as a task.

1. **Click on "+" icon and you can start adding new DevTools**
    For example, you can add 
    - A terminal DevTool
    - A preview DevTool
    - Additional DevTools once available
    
1. **Let's define a new Task, throught the "+" Dropdown**
    When hovering over the Task submenu you can click on the "+ New Task" Button. A task can be any command that you usually run in the terminal. After defining a task, you can run it from the UI or from the Command Palette as well.
    
1. **Run a Command and save it as a task**

Congratulations. You are now running your Project in CodeSandbox. 

## Github permissions

CodeSandbox Projects requires full git access to be able to import and commit. In the current beta, this check is not being done giving an authentication error.

To set the right permissions:

1. **Go to the [CodeSandbox Dashboard](https://codesandbox.io/dashboard)**

1. **Click on the Dropdown at the top right of the screen**

1. **Click on Preferences menu point**
  ![Preferences Dropdown Menu Point on CodeSandbox Dashboard](../images/preferences.png)
  
1. **Click on Integrations**

1. **Fix GitHub Permissions**
  Clicking on the "x" will allow you to reconnect your GitHub Account and that will fix all potential permission issues. 
    
    