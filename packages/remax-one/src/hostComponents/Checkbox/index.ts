import createHostComponent from '../../createHostComponent';

export interface CheckboxProps extends React.AriaAttributes {
  // 通用属性
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;

  // 支付宝
  alipay_onChange?: (e: any) => void;
}

export default createHostComponent<CheckboxProps>('checkbox');
