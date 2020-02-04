import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';
import {
  ELEMENT_ID_ATTRIBUTE_NAME,
  NATIVE_COMPONENT_ATTRIBUTE_NAME,
} from './constants';

export let JSXElementPaths: Array<{ path: NodePath; module: string }> = [];

function markEID(element: t.JSXOpeningElement, elementID: any) {
  if (
    !element.attributes ||
    element.attributes.find(
      attr =>
        t.isJSXAttribute(attr) &&
        (attr.name.name === ELEMENT_ID_ATTRIBUTE_NAME ||
          // 原生组件不标记 ELEMENT ID
          attr.name.name === NATIVE_COMPONENT_ATTRIBUTE_NAME)
    )
  ) {
    return;
  }

  element.attributes.push(
    t.jsxAttribute(
      t.jsxIdentifier(ELEMENT_ID_ATTRIBUTE_NAME),
      t.stringLiteral(elementID.generate())
    )
  );
}

export default function visitJSXElement() {
  JSXElementPaths = [];

  const elementID = {
    id: 0,
    generate() {
      this.id += 1;
      return this.id.toString();
    },
  };

  return {
    visitor: {
      JSXElement: (path: NodePath, state: any) => {
        if (!t.isJSXElement(path.parent)) {
          const module = state.filename;

          markEID((path.node as t.JSXElement).openingElement, elementID);
          JSXElementPaths.push({ path, module });
        }
      },
    },
  };
}
