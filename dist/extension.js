"use strict";var U=Object.create;var i=Object.defineProperty;var q=Object.getOwnPropertyDescriptor;var V=Object.getOwnPropertyNames;var W=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty;var D=(t,e)=>{for(var o in e)i(t,o,{get:e[o],enumerable:!0})},l=(t,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of V(e))!A.call(t,s)&&s!==o&&i(t,s,{get:()=>e[s],enumerable:!(r=q(e,s))||r.enumerable});return t};var n=(t,e,o)=>(o=t!=null?U(W(t)):{},l(e||!t||!t.__esModule?i(o,"default",{value:t,enumerable:!0}):o,t)),z=t=>l(i({},"__esModule",{value:!0}),t);var K={};D(K,{activate:()=>J});module.exports=z(K);var c=n(require("vscode"));var h=n(require("vscode")),d=n(require("path")),a=n(require("fs"));var v=t=>`import { FC } from 'react';

export type I${t}Props = {

};

export const ${t}: FC<I${t}Props> = () => {
  return (

  );
};

export default ${t};
`;var m=t=>`export * from './${t}';`;var y=t=>{if(t&&t.fsPath){let e=t.fsPath;h.window.showInputBox({prompt:"Enter React component name",placeHolder:"MyComponent"}).then(o=>{if(o){let r=d.join(e,o);a.mkdirSync(r);let s=v(o),x=m(o);a.writeFileSync(d.join(r,`${o}.tsx`),s),a.writeFileSync(d.join(r,"index.ts"),x)}})}};var C=n(require("vscode")),u=n(require("fs")),w=n(require("path"));var F=t=>`export const ${t} = () => {
  
};
`;var P=t=>{let e=t.fsPath;C.window.showInputBox({prompt:"Enter React hook name",placeHolder:"MyHook (or useMyHook)"}).then(o=>{if(typeof o=="string"){let r=o;o.startsWith("use")===!1&&(r=`use${o}`),C.window.showInformationMessage(r);let s=F(r);u.writeFileSync(w.join(e,`${r}.ts`),s)}})};var H=n(require("vscode")),$=n(require("fs")),k=n(require("path"));var R=t=>`import { ComponentType } from 'react';

export type IComponentRequiredProps = {
  // Write required props.
};

export function ${t}<P = IComponentRequiredProps>(Component: ComponentType<P>) {
  return function(props: P) {
    return (
      <Component { ...props as any } />
    );
  };
};

export default ${t};
`;var I=t=>{let e=t.fsPath;H.window.showInputBox({prompt:"Enter React hoc name",placeHolder:"withMyHOC"}).then(o=>{if(o){let r=R(o);$.writeFileSync(k.join(e,`${o}.hoc.tsx`),r)}})};var E=n(require("vscode")),p=n(require("fs")),f=n(require("path"));var g=t=>`import { FC } from "react";

export type ITestProviderProps = {
  // Enter provider props
};

export const TestProvider: FC<ITestProviderProps> = () => {
  return (

  );
};

export default TestProvider;
`;var j=t=>{let e=t.fsPath;E.window.showInputBox({prompt:"Enter React provider name",placeHolder:"MyProvider (Provider: use same name as context)"}).then(o=>{if(o){let r=`${o}.provider.tsx`,s=g(o),x=m(r);p.mkdirSync(f.join(e,o)),p.writeFileSync(f.join(e,o,r),s),p.writeFileSync(f.join(e,o,"index.ts"),x)}})};var M=n(require("vscode")),b=n(require("fs")),O=n(require("path"));var S=t=>`import { createContext } from "react";

export type I${t}ContextValue = {
  // Enter context props
};

export const ${t}Context = createContext<I${t}ContextValue | undefined>(undefined);

export default ${t}Context;
`;var T=t=>{let e=t.fsPath;M.window.showInputBox({prompt:"Enter React context name",placeHolder:"MyContext (A .context prefix is added to the filename.)"}).then(o=>{if(o){let r=S(o);b.writeFileSync(O.join(e,`${o}.context.ts`),r)}})};var B=t=>{G.forEach(e=>{t.subscriptions.push(e)})},G=[c.commands.registerCommand("vscode-react-developer-toolkit.createReactComponent",y),c.commands.registerCommand("vscode-react-developer-toolkit.createReactHOC",I),c.commands.registerCommand("vscode-react-developer-toolkit.createReactHook",P),c.commands.registerCommand("vscode-react-developer-toolkit.createReactProvider",j),c.commands.registerCommand("vscode-react-developer-toolkit.createReactContext",T)];function J(t){B(t)}0&&(module.exports={activate});
