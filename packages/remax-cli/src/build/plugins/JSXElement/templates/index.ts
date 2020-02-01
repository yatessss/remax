import * as t from '@babel/types';
import { kebabCase } from 'lodash';
import { JSXElementPaths } from '../visit';
import { hostComponents } from '../preprocess';
import { createAttributesTemplate, getElementID } from './attributes';

function isEmptyText(
  node:
    | t.JSXElement
    | t.JSXText
    | t.JSXFragment
    | t.JSXExpressionContainer
    | t.JSXSpreadChild
) {
  if (node.type === 'JSXText') {
    if (!node.value.trim().replace(/\r?\n|\r/g, '')) {
      return true;
    }
  }
  return false;
}

function normalizeLiteral(literal: string) {
  if (literal.startsWith('\n')) {
    literal = literal.trimLeft();
  }

  if (literal.trim().indexOf('\n') !== -1) {
    literal = literal.replace(/\n\s+/g, ' ');
  }

  if (literal.indexOf('\n') !== -1) {
    literal = literal.trimRight();
  }

  return literal;
}

function stringPath(path: Array<string | number>) {
  return path.reduce<string>((acc, current) => {
    if (typeof current === 'string') {
      if (acc) {
        acc += '.' + current;
      } else {
        acc += current;
      }
    } else {
      acc += '[' + current + ']';
    }

    return acc;
  }, '');
}

function createJSXTemplate(
  element:
    | t.JSXElement
    | t.JSXText
    | t.JSXFragment
    | t.JSXExpressionContainer
    | t.JSXSpreadChild,
  module: string,
  dataPath: Array<string | number>
): string {
  if (t.isJSXElement(element)) {
    const attributes = element.openingElement.attributes;
    let tag = (element.openingElement.name as t.JSXIdentifier).name;

    // 非 host 组件
    if (
      !hostComponents.get(module)?.has(tag) &&
      tag !== 'block' &&
      tag !== 'expression-block'
    ) {
      return `<template is="TPL" data="{{root: ${stringPath(dataPath)}}}" />`;
    }

    tag = kebabCase(tag);

    const isExpressionBlock = tag === 'expression-block';

    if (isExpressionBlock) {
      tag = 'block';
    }

    return `<${tag} ${createAttributesTemplate(
      tag,
      stringPath(dataPath),
      attributes
    )} >
  ${element.children
    .filter(child => !isEmptyText(child))
    .map((child, cindex) =>
      createJSXTemplate(
        child,
        module,
        isExpressionBlock ? dataPath : [...dataPath, 'children', cindex]
      )
    )
    .join('')}
</${tag}>`;
  }

  if (t.isJSXExpressionContainer(element)) {
    const expressionContainer = element as t.JSXExpressionContainer;

    if (t.isLiteral(expressionContainer.expression)) {
      return `{{'${normalizeLiteral(
        (expressionContainer.expression as t.StringLiteral).value
      )}'}}`;
    }

    return `<template is="TPL" data="{{root: ${stringPath(dataPath)}}}" />`;
  }

  if (t.isJSXText(element)) {
    return `{{'${normalizeLiteral((element as t.JSXText).value)}'}}`;
  }

  return '';
}

export default function JSXTemplates() {
  return JSXElementPaths.map(({ path, module }, index) => {
    const element = path.node as t.JSXElement;
    const elementID = getElementID(element);

    return {
      elementID,
      content: createJSXTemplate(element, module, ['node']),
    };
  });
}
