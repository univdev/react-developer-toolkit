import * as vscode from 'vscode';
import { createReactComponentCommand } from "../commands/CreateReactComponent.command";

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
];

export default commandsFactory;
