import * as t from '@babel/types';
import { ELEMENT_ID_ATTRIBUTE_NAME } from '../constants';
import API from '../../../../API';

export function getElementID(element: t.JSXElement) {
  const attribute = element.openingElement.attributes.find(
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
    return hostComponent.props
      .map(prop => `${prop}="{{${dataPath}.props['${prop}']}}"`)
      .join(' ');
  }

  function createAttributeValueTemplate(
    attributeName: string,
    value: t.StringLiteral | t.JSXExpressionContainer
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

    return `"${template}"`;
  }

  return attributes
    .filter(attr => t.isJSXAttribute(attr))
    .filter((attr: any) => attr.name.name !== ELEMENT_ID_ATTRIBUTE_NAME)
    .map((attr: any) => {
      const prop = hostComponent?.alias?.[attr.name.name] ?? attr.name.name;
      return `${prop}=${createAttributeValueTemplate(prop, attr.value as any)}`;
    })
    .join(' ');
}
