import * as React from 'react';
import createHostComponent from '../../createHostComponent';

export interface TextProps extends React.AriaAttributes {
  // 通用属性
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  selectable?: boolean;
  space?: string;
  decode?: boolean;

  // 支付宝
  alipay_numberOfLines?: number;
}
const Text = createHostComponent<TextProps>('text');

export default Text;
