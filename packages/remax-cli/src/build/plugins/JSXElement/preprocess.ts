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

export const hostComponents = new Map<string, Set<string>>();

export default function preprocess() {
  return {
    visitor: {
      ImportDeclaration(path: NodePath<t.ImportDeclaration>, state: any) {
        const node = path.node;

        if (!node.source.value.startsWith('remax/')) {
          return;
        }

        const module = state.opts.filename;

        node.specifiers.forEach(specifier => {
          if (t.isImportSpecifier(specifier)) {
            const componentName = specifier.imported.name;

            if (!hostComponents.get(module)) {
              hostComponents.set(module, new Set());
            }

            hostComponents.get(module)?.add(componentName);
          }
        });
      },
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
      JSXElement: (path: NodePath, state: any) => {
        const node = path.node as t.JSXElement;
        const module = state.opts.filename;
        const tag = (node.openingElement.name as t.JSXIdentifier).name;

        if (hostComponents.get(module)?.has(tag)) {
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
