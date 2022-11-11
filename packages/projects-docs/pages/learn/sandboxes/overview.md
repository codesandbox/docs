---
title: Sandboxes
description:
---

import { Tabs, WrapContent } from '../../../../../shared-components/Tabs'

# CodeSandbox Sandboxes

Sandboxes are the environment for rapid web development.

<Tabs tabs={["Browser", "Cloud", "iOS"]}>
    <WrapContent>
    ## What is a Browser Sandbox
      When using Browser Sandboxes, your code is evaluated and run our built-in
execution environment. These client environments run entirely inside of your browser and will continue to
bundle your code even when you lose your connection to our servers. 

Browser Sandboxes each have their own bundler attached to them which are
configured to support a specific framework and emulate their official CLI tools.
They are not one-to-one implementations and thus do not support advanced
configuration like custom webpack configurations or ejecting. However, they are
designed to mirror the default behavior of the framework. 

If your project requires advanced configuration, try using a Cloud Sandbox instead.
    </WrapContent>
    <WrapContent>
       ## What is a Cloud Sandbox
       Unlike Browser Sandboxes that run on your browser, Cloud Sandboxes run on our microVMs. Cloud Sandboxes are great for any prototyping needs, but they really shine when working on projects that require the use of the server. 
       You can learn more about the editor and the unique functionalities of the cloud developer environment in [Repositories](/learn/repositories/overview).
       
       Cloud Sandboxes and Repositories run on the same infrastructure and use the same editor. The main distinction between the two is that Sandboxes are built for prototyping while Repositories are built for full-scale development. Once you scale a Sandbox to a Repository, you will have:
       - Branching
       - Git tooling 
       - Full integration with GitHub
    </WrapContent>
     <WrapContent>
        Browser and Cloud Sandboxes are two different types of Web Editors. They serve different use cases as their infrastructure is set up to support different types of technologies. Sandboxes on iOS work on a native editor that has some differences.
        
        ### Local Sandboxes
        On the iOS device, there are local sandboxes which are Sandboxes that have been downloaded onto your device.
        
        ### Sandboxes
        Once signed in to a team, you will have access to all your sandboxes that have been created in any editor. You will be able to access them and work on them in the iOS editor.
    </WrapContent>
</Tabs>