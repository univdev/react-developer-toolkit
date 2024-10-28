import * as vscode from 'vscode';
import { createReactComponentCommand } from "../commands/CreateReactComponent.command";
import { createReactHookCommand } from '../commands/CreateReactHook.command';
import { createReactHOCCommand } from '../commands/CreateReactHOC.command';
import { createReactProviderCommand } from '../commands/CreateReactProvider.command';
import { createReactContextCommand } from '../commands/CreateReactContext.command';

export const commandsFactory = (context: vscode.ExtensionContext) => {
  commands.forEach((command) => {
    context.subscriptions.push(command);
  });
};

const commands = [
  vscode.commands.registerCommand(
    'vscode-react-developer-toolkit.createReactComponent',
    createReactComponentCommand,
  ),
  vscode.commands.registerCommand(
    'vscode-react-developer-toolkit.createReactHOC',
    createReactHOCCommand,
  ),
  vscode.commands.registerCommand(
    'vscode-react-developer-toolkit.createReactHook',
    createReactHookCommand,
  ),
  vscode.commands.registerCommand(
    'vscode-react-developer-toolkit.createReactProvider',
    createReactProviderCommand,
  ),
  vscode.commands.registerCommand(
    'vscode-react-developer-toolkit.createReactContext',
    createReactContextCommand,
  ),
];

export default commandsFactory;
