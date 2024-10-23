import * as vscode from 'vscode';
import { createReactComponent } from './commands/CreateReactComponent.command';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('vscode-react-developer-toolkit.createReactComponent', (uri: vscode.Uri) => {
    if (uri && uri.fsPath) {
      vscode.window.showInputBox({ 
        prompt: 'Enter React component name',
        placeHolder: 'MyComponent'
      }).then(componentName => {
        if (componentName) {
          createReactComponent(uri.fsPath, componentName);
        }
      });
    }
  });

  context.subscriptions.push(disposable);
}
