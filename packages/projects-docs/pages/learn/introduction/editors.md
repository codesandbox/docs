---
title: Editor
description:
---

import Callout from 'nextra-theme-docs/callout'
import Video from '../../../../../shared-components/Video'
import ButtonDoc from '../../../components/ButtonDoc'
import { Tabs, WrapContent } from '../../../../../shared-components/Tabs'

# Editors

![The web editor](../images/overview-web.jpg)

CodeSandbox has [many alternatives for you to code](../introduction/overview). Each option is built to help you focus on what matters: getting the work done  without friction. 

<Tabs tabs={["Web Editor", "VS Code", "iOS"]}>
    <WrapContent>
    ## Browser Sandbox Editor
      Known and loved for years, this online editor is built for rapid web development. Use this editor to prototype quickly, experiment easily, and share creations with a click.
      <br/>
    ## Cloud Web Editor
       Our new web editor is part of a larger effort at CodeSandbox to increase the accessibility of complex tools like git, setup, review flows, contributions, and visualizing components. 
    </WrapContent>
     <WrapContent>
## Keep working on VS Code

**Install the Projects VSCode extension and open any branch directly in your VSCode editor.** Work from your local environment with your own configurations and shortcuts whilst remaining connected to the CodeSandbox development environment.

<div className="ctaContainer">
    <ButtonDoc title={<>Get the <br/>VSCode Extension</>} cta="Install" description="" link="https://marketplace.visualstudio.com/items?itemName=CodeSandbox-io.codesandbox-projects" />
</div>

## Opening a branch in VSCode

![Open in vscode button](../images/getting-openvscode.jpg)

To start working in a branch on VSCode, open the branch in the Editor and click on the `Open in VSCode` button positioned in the bottom left corner. This will prompt you to install the CodeSandbox extension  responsible for making the connection to our cloud development environment.

### Learn more

To get the most from your local setup, check our [VS Code Extension documentation](https://codesandbox.io/docs/vscode).    
    </WrapContent>
    <WrapContent>
## Keep working in the iPad or iPhone

![iOS-App](../images/iOS-iPad.jpg)

**CodeSandbox for iOS** is a full-fledged development environment that brings the power of modern JavaScript development to your iOS device. Use your iPhone or iPad to develop and run your Node.js applications or collaborate in real-time with others.

<div className="ctaContainer">
    <ButtonDoc title={<>Download <br/>the iOS app</>} cta="Go to the App Store" description="" link="https://apps.apple.com/us/app/codesandbox/id1423330822" />
</div>

    </WrapContent>
    
</Tabs>

