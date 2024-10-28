import * as vscode from 'vscode';
import { commandsFactory } from './factory/Commands.factory';

export function activate(context: vscode.ExtensionContext) {
  commandsFactory(context);
}
