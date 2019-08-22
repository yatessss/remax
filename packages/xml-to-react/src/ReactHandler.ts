import MagicString from 'magic-string';
import { Node } from './types';
import {
  buildIfDirective,
  buildElseIfDirective,
  buildElseDirective,
} from './directive';

type Callback = (error: Error | null, code: string) => void;

const directiveBuilders: { [name: string]: Function } = {
  'a:if': buildIfDirective,
  'a:elsif': buildElseIfDirective,
  'a:else': buildElseDirective,
};

export default class ReactHandler {
  code = new MagicString('');
  nodeStack: Node[] = [];
  hostTags: string[] = [];
  tree: Node[] = [];
  callback: Callback;

  constructor(callback: Callback) {
    this.callback = callback;
  }

  onparserinit() {
    this.code.append('export default (props) => (\n');
  }

  onopentag(name: string, attributes: { [name: string]: string }) {
    const node: Node = {
      name,
      attributes: attributes,
      directives: [],
    };

    Object.keys(attributes).forEach(attrName => {
      const build = directiveBuilders[attrName];
      if (build) {
        const directive = build(node);
        node.directives.push(directive);
        if (directive[0]) {
          this.code.append(directive[0]);
        }
      }
    });

    this.nodeStack.push(node);

    if (name === 'import-module') {
      this.code.prepend(`import ${attributes.name} from ${attributes.from};\n`);
    } else {
      const attributesString = Object.keys(attributes)
        .filter(name => !directiveBuilders[name])
        .map(name => `${name}=${attributes[name]}`)
        .join(' ');
      this.code.append(`<${(name + ' ' + attributesString).trim()}>`);
    }
  }

  ontext(text: string) {
    this.code.append(text);
  }

  onclosetag(name: string) {
    const node = this.nodeStack.pop();
    if (name !== 'import-module') {
      this.code.append(`</${name}>\n`);
    }
    if (node) {
      node.directives.forEach(directive => {
        if (directive[1]) {
          this.code.append(directive[1]);
        }
      });
    }
  }

  onerror(error: Error) {
    this.callback(error, this.code.toString());
  }

  onend() {
    this.code.prepend("import * as React from 'react';\n");
    this.code.append(');');
    this.callback(null, this.code.toString());
  }

  addNode(node: Node) {
    const parent = this.nodeStack[this.nodeStack.length - 1];
    const siblings = parent ? parent.children : this.tree;
    siblings.push(node);
  }
}
