import * as vscode from 'vscode';
import { createReactComponentCommand } from "../commands/CreateReactComponent.command";
import { createReactHookCommand } from '../commands/CreateReactHook.factory';

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
    'vscode-react-developer-toolkit.createReactHook',
    createReactHookCommand,
  ),
];

export default commandsFactory;
