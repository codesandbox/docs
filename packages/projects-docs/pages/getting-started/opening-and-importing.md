import Callout from 'nextra-theme-docs/callout'

# Opening and Importing Projects

From our new [Dashboard](https://codesandbox.io/p/dashboard) you can open Projects and import new Repositories. 

## Importing: Creating a new Project
To import a new project, you basically need a valid GitHub URL for the repository and paste it into the importer modal on the dashboard page:

1. Select the team where you want to import the project to
1. Cick on "+ New project" 
1. Import a repository from GitHub or clone one of our templates
  <Callout>
    **What is a valid repository URL that can be used?**
    
    - For example, `https://github.com/facebook/react`, meaning `https://github.com/:org/:repo`
    - Doesn't contain the branch name;
    - It contains the protocol, such as `https`;
  </Callout>

Under the search, you can also select a GitHub Organization where your project is located.

In some cases, the search won’t find your repository on GitHub. Then you have to click on the `Show all` button under the last repository on the list to make sure the search will happen among all the projects you have on GitHub.

## Opening an existing Project

### Open existing projects

Once you imported a project, it will be available on the Dashboard.

![https://images.tango.us/public/screenshot_f3c90283-f9fe-44d7-90ff-27a323d21287.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&fp-z=1.0000&w=1200&ar=3892%3A3008](https://images.tango.us/public/screenshot_f3c90283-f9fe-44d7-90ff-27a323d21287.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&fp-z=1.0000&w=1200&ar=3892%3A3008)

You can also check your recent branches or projects that you’ve worked on recently.

![https://images.tango.us/public/screenshot_5370e131-9027-4577-ae4b-7ddae55695e0.png?crop=focalpoint&fit=crop&fp-x=0.0357&fp-y=0.0904&fp-z=3.1047&w=1200&ar=3892%3A3008](https://images.tango.us/public/screenshot_5370e131-9027-4577-ae4b-7ddae55695e0.png?crop=focalpoint&fit=crop&fp-x=0.0357&fp-y=0.0904&fp-z=3.1047&w=1200&ar=3892%3A3008)

Through these options you should have quick access to projects and branches you worked on recently.

# Troubleshooting

- **I got a "Permission error" while importing a project**
    
    Make sure you are in a Team that is allowed to open the CodeSandbox Projects.
    
    **Or** make sure you have access to this repository in GitHub as well, you're only available to import projects that you have "**write"** permission on Github. Currently, we’re working on the enable import for public repositories where you only have **“read”** permission.
    
- **Still getting error permission**
    
    As CodeSandbox Projects uses GitHub authentication to clone the repository, you need to make sure that you have logged in using the GitHub provider. To do this:
    
    1. Go to the [Dashboard](https://codesandbox.io/dashboard/home);
    2. Click on the settings menu, on the right top side;
    3. Choose the Preference item;
    4. Go to the integration item in the modal that just opened;
    5. "Sign in" using GitHub;
    6. Try to do the import flow once again;
    
- **Invalid "authorization code" Firefox and Safari**
    
    Safari and Firefox by default block popups please make sure you give the domain permission (in setting) or refresh the page after you opened the popup and try again.