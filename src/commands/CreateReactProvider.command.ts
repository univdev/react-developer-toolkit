import * as vscode from 'vscode';
import * as fs from 'fs';
import * as fspath from 'path';
import { barrelFileFactory } from '../factory/BarrelFile.factory';
import { createReactProviderFactory } from '../factory/CreateReactProvider.factory';

export const createReactProviderCommand = (uri: vscode.Uri) => {
  const path = uri.fsPath;

  vscode.window.showInputBox({
    prompt: 'Enter React provider name',
    placeHolder: 'MyProvider (Provider: use same name as context)',
  }).then((providerName) => {
    if (providerName) {
      const fileName = `${providerName}.provider.tsx`;

      const contextFileContent = createReactProviderFactory(providerName);
      const barrelFile = barrelFileFactory(fileName);

      fs.mkdirSync(fspath.join(path, providerName));
      fs.writeFileSync(
        fspath.join(path, providerName, fileName),
        contextFileContent,
      );
      fs.writeFileSync(
        fspath.join(path, providerName, 'index.ts'),
        barrelFile,
      );
    }
  });
};