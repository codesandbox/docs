# Settings & Extensions

## Default Workspace Extensions

You can create the file `.vscode/extensions.json` in your repository to define the default extensions that should be installed for the repository. An example:

```json
{
  "recommendations": ["esbenp.prettier-vscode", "dbaeumer.vscode-eslint"]
}
```

This will make sure that Prettier and ESLint are installed whenever someone opens the branch in VSCode.

## Default User Extensions

In case you have any personal extensions that you want to have in every branch, you can define those in your VSCode settings under the setting id `remote.SSH.defaultExtensions`. To change this setting, you can open VSCode settings (`CMD/Ctrl + ,`) and search for `remote.SSH.defaultExtensions`.

You can copy your favourite VSCode extension ids, and put them in that setting. From then on, these extensions will be automatically installed in your branches.

## VSCode Setting Sync

To sync your settings and keybindings between branches, you can enable VSCode Setting Sync. To learn more about how to set this up, you can check [here](https://code.visualstudio.com/docs/editor/settings-sync).