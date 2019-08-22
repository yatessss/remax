import { Node } from './types';
import { buildExpression } from './expression';

export function buildIfDirective(node: Node) {
  const expression = buildExpression(node.attributes['a:if']);
  return [`((${expression}) ? (\n`, `) : null)\n`];
}

export function buildElseDirective(node: Node) {
  return [];
}

export function buildElseIfDirective(node: Node) {
  return [];
}
