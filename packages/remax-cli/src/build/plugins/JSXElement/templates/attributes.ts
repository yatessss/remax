import * as t from '@babel/types';
import {
  ELEMENT_ID_ATTRIBUTE_NAME,
  REACT_KEY_ATTRIBUTE_NAME,
} from '../constants';
import API from '../../../../API';

export function getElementID(element: t.JSXOpeningElement) {
  const attribute = element.attributes.find(
    attr =>
      t.isJSXAttribute(attr) && attr.name.name === ELEMENT_ID_ATTRIBUTE_NAME
  ) as t.JSXAttribute;

  if (attribute) {
    return (attribute.value as t.StringLiteral).value;
  }
}

export function createAttributesTemplate(
  componentType: string,
  dataPath: string,
  attributes: Array<t.JSXAttribute | t.JSXSpreadAttribute>
) {
  const hostComponent = API.getHostComponents().get(componentType);

  // case: Spread Attributes
  if (hostComponent && attributes.find(attr => t.isJSXSpreadAttribute(attr))) {
    return [...hostComponent.props, 'data-rid']
      .map(prop => `${prop}="{{${dataPath}.props['${prop}']}}"`)
      .join(' ');
  }

  function createAttributeValueTemplate(
    attributeName: string,
    value?: t.StringLiteral | t.JSXExpressionContainer
  ) {
    let template = '';
    if (t.isStringLiteral(value)) {
      template = value.value;
    }

    if (t.isJSXExpressionContainer(value)) {
      if (t.isStringLiteral(value.expression)) {
        template = (value.expression as t.StringLiteral).value;
      } else {
        template = `{{${dataPath}.props['${attributeName}']}}`;
      }
    }

    if (attributeName === 'data-rid') {
      template = `{{${dataPath}.props['${attributeName}']}}`;
    }

    return `"${template}"`;
  }

  const template = attributes
    .filter(attr => t.isJSXAttribute(attr))
    .filter((attr: any) => attr.name.name !== ELEMENT_ID_ATTRIBUTE_NAME)
    .filter((attr: any) => attr.name.name !== REACT_KEY_ATTRIBUTE_NAME)
    .map((attr: any) => {
      const prop = hostComponent?.alias?.[attr.name.name] ?? attr.name.name;
      return `${prop}=${createAttributeValueTemplate(prop, attr.value as any)}`;
    })
    .join(' ');

  if (componentType !== 'block') {
    // 默认都加上 data-rid 属性
    return template.concat(
      ' ' + `data-rid=${createAttributeValueTemplate('data-rid')}`
    );
  }

  return template;
}
