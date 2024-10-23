import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { reactComponentFactory } from '../factory/ReactComponent.factory';
import { barrelFileFactory } from '../factory/BarrelFile.factory';

export const createReactComponent = (dirPath: string, componentName: string) => {
  vscode.window.showInformationMessage(dirPath, componentName);

  const componentDir = path.join(dirPath, componentName);
  fs.mkdirSync(componentDir);

  const componentContent = reactComponentFactory(componentName);
  const barrelFileContent = barrelFileFactory(componentName);

  fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), componentContent);
  fs.writeFileSync(path.join(componentDir, `index.ts`), barrelFileContent);
};
