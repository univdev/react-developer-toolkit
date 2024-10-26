import * as vscode from 'vscode';
import * as fs from 'fs';
import * as fspath from 'path';
import { createReactContextFactory } from '../factory/CreateReactContext.factory';

export const createReactContextCommand = (uri: vscode.Uri) => {
  const path = uri.fsPath;

  vscode.window.showInputBox({
    prompt: 'Enter React context name',
    placeHolder: 'MyContext (A .context prefix is added to the filename.)',
  }).then((contextName) => {
    if (contextName) {
      const contextFileContent = createReactContextFactory(contextName);

      fs.writeFileSync(
        fspath.join(path, `${contextName}.context.ts`),
        contextFileContent,
      );
    }
  });
};