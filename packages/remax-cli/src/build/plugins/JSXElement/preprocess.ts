import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';

function shouldBeExpBlock(path: NodePath) {
  if (!t.isJSXElement(path)) {
    return false;
  }
  const node = (path.node || path) as t.JSXElement;

  const openingElement = node.openingElement.name;
  if (!t.isJSXIdentifier(openingElement)) {
    return true;
  }

  return openingElement.name !== 'expression-block';
}

export function getHostComponentName(node: t.JSXElement, path: NodePath) {
  if (t.isJSXIdentifier(node.openingElement.name)) {
    const tag = node.openingElement.name.name;
    const binding = path.scope.getBinding(tag);

    if (!binding) {
      return tag;
    }

    const importPath = binding.path;
    if (importPath && t.isImportSpecifier(importPath.node)) {
      return importPath.node.imported.name;
    }

    return tag;
  }

  if (t.isJSXMemberExpression(node.openingElement.name)) {
    const property = node.openingElement.name.property;

    return property.name;
  }
}

export function isHostComponent(node: t.JSXElement, path: NodePath) {
  if (t.isJSXIdentifier(node.openingElement.name)) {
    const tag = node.openingElement.name.name;
    const binding = path.scope.getBinding(tag);

    if (!binding) {
      return false;
    }

    const importPath = binding.path;

    if (
      importPath &&
      t.isImportSpecifier(importPath.node) &&
      t.isImportDeclaration(importPath.parent) &&
      importPath.parent.source.value.startsWith('remax/')
    ) {
      return true;
    }

    return false;
  }

  if (t.isJSXMemberExpression(node.openingElement.name)) {
    const object = node.openingElement.name.object;

    if (!t.isJSXIdentifier(object)) {
      return false;
    }

    const binding = path.scope.getBinding(object.name);
    if (!binding) {
      return false;
    }

    const importPath = binding.path;

    if (
      importPath &&
      t.isImportNamespaceSpecifier(importPath.node) &&
      t.isImportDeclaration(importPath.parent) &&
      importPath.parent.source.value.startsWith('remax/')
    ) {
      return true;
    }

    return false;
  }

  return false;
}

export default function preprocess() {
  return {
    visitor: {
      JSXExpressionContainer: (path: NodePath) => {
        const node = path.node as t.JSXExpressionContainer;
        if (t.isJSXEmptyExpression(node.expression)) {
          path.remove();
          return;
        }

        if (!shouldBeExpBlock(path.parentPath)) {
          return;
        }

        path.replaceWith(
          t.jsxElement(
            t.jsxOpeningElement(t.jsxIdentifier('expression-block'), []),
            t.jsxClosingElement(t.jsxIdentifier('expression-block')),
            [node],
            false
          )
        );
      },
      JSXFragment: (path: NodePath) => {
        const node = path.node as t.JSXFragment;

        path.replaceWith(
          t.jsxElement(
            t.jsxOpeningElement(t.jsxIdentifier('block'), []),
            t.jsxClosingElement(t.jsxIdentifier('block')),
            node.children,
            false
          )
        );
      },
      JSXElement: (path: NodePath) => {
        const node = path.node as t.JSXElement;
        const tag = (node.openingElement.name as t.JSXIdentifier).name;

        if (!isHostComponent(node, path)) {
          return;
        }

        if (
          tag === 'expression-block' ||
          tag === 'block' ||
          !shouldBeExpBlock(path.parentPath)
        ) {
          return;
        }

        path.replaceWith(
          t.jsxElement(
            t.jsxOpeningElement(t.jsxIdentifier('expression-block'), []),
            t.jsxClosingElement(t.jsxIdentifier('expression-block')),
            [node],
            false
          )
        );
      },
    },
  };
}
