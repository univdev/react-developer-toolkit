import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { reactComponentFactory } from '../factory/ReactComponent.factory';
import { barrelFileFactory } from '../factory/BarrelFile.factory';

export const createReactComponentCommand = (uri: vscode.Uri) => {
  if (uri && uri.fsPath) {
    const dirPath = uri.fsPath;

    vscode.window.showInputBox({ 
      prompt: 'Enter React component name',
      placeHolder: 'MyComponent'
    }).then(componentName => {
      if (componentName) {
        vscode.window.showInformationMessage(dirPath, componentName);

        const componentDir = path.join(dirPath, componentName);
        fs.mkdirSync(componentDir);
      
        const componentContent = reactComponentFactory(componentName);
        const barrelFileContent = barrelFileFactory(componentName);
      
        fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), componentContent);
        fs.writeFileSync(path.join(componentDir, `index.ts`), barrelFileContent);
      }
    });
  }
};
