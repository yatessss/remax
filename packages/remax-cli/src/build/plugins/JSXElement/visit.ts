import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';

export let JSXElementPaths: Array<{ path: NodePath; module: string }> = [];

export default function visitJSXElement() {
  JSXElementPaths = [];

  return {
    visitor: {
      JSXElement: (path: NodePath, state: any) => {
        if (!t.isJSXElement(path.parent)) {
          const module = state.filename;
          JSXElementPaths.push({ path, module });
        }
      },
    },
  };
}
