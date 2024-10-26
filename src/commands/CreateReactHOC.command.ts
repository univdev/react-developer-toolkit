import * as vscode from 'vscode';
import * as fs from 'fs';
import * as fspath from 'path';
import { reactHOCFactory } from '../factory/ReactHOC.factory';

export const createReactHOCCommand = (uri: vscode.Uri) => {
  const path = uri.fsPath;
  
  vscode.window.showInputBox({
    prompt: 'Enter React hoc name',
    placeHolder: 'withMyHOC',
  }).then((hocName) => {
    if (hocName) {
      const hocFileContent = reactHOCFactory(hocName);

      fs.writeFileSync(
        fspath.join(path, `${hocName}.hoc.tsx`),
        hocFileContent,
      );
    }
  });
};
