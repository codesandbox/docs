import Callout from 'nextra-theme-docs/callout'
import { VSCODE_DOCS_URL, IOS_DOCS_URL } from "../../../../../shared-components/contants.js"

<div style={{height:478,width:'100%',background:'var(--docs-accent-color)', borderRadius: '6px', marginBottom: '3rem'}}>
</div>

import ButtonDoc from '../../../components/ButtonDoc'

# About CodeSandbox Projects

**CodeSandbox Projects** is a cloud development platform with the familiar speed and experience of CodeSandbox, but deeply integrated with your favourite tooling and suited for projects of any size.

We hope you’re excited about the future of web development and to build projects anywhere and anytime with your team.

Projects documentation are related to the overall functionalities and the Web Editor. If you are looking for other clients go check the specific documentations:

<div className="ctaContainer">
    <ButtonDoc title={<>CodeSandbox <br/>for VS Code</>} cta="Check now" description="" link={VSCODE_DOCS_URL} />
    <ButtonDoc title={<>CodeSandbox <br/>for iOS</>} cta="Check now" link={IOS_DOCS_URL} />
</div>

<br/>

<Callout emoji="🛠️">
    This documentation is under active development as we are still working on many foundational features. Check back often and let us know if something is missing.
</Callout>