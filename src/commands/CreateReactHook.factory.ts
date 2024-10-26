import * as vscode from 'vscode';
import * as fs from 'fs';
import * as fspath from 'path';
import { reactHookFactory } from '../factory/ReactHook.factory';

export const createReactHookCommand = (uri: vscode.Uri) => {
  const path = uri.fsPath;

  vscode.window.showInputBox({
    prompt: 'Enter React hook name',
    placeHolder: 'MyHook (or useMyHook)',
  }).then((hookName) => {
    if (typeof hookName === 'string') {
      let newHookName = hookName;
      if (hookName.startsWith('use') === false) newHookName = `use${hookName}`;

      vscode.window.showInformationMessage(newHookName);

      const hookFileContent = reactHookFactory(newHookName);

      fs.writeFileSync(
        fspath.join(path, `${newHookName}.ts`),
        hookFileContent,
      );
    }
  });
};
