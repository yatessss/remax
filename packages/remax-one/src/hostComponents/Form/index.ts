import * as React from 'react';
import createHostComponent from '../../createHostComponent';

export interface FormProps {
  // 通用属性
  readonly dataset?: DOMStringMap;
  className?: string;
  style?: React.CSSProperties;
  onSubmit?: (e: any) => void;
  onReset?: (e: any) => void;

  // 支付宝
  alipay_reportSubmit?: boolean;

  // 微信
  weixin_reportSubmit?: boolean;
  weixin_reportSubmitTimeout?: number;
}
const Form = createHostComponent<FormProps>('form');

export default Form;
