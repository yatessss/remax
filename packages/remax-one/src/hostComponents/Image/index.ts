import * as React from 'react';
import createHostComponent from '../../createHostComponent';

export interface ImageProps extends React.AriaAttributes {
  // 通用属性
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  src?: string;
  mode?: 'scaleToFill' | 'aspectFit' | 'aspectFill' | 'widthFix';
  style?: React.CSSProperties;
  lazyLoad?: boolean;
  onLoad?: (e: any) => void;
  onError?: (e: any) => void;
  onTap?: (e: any) => void;

  // 支付宝
  alipay_defaultSource?: string;

  // 微信
  weixin_webp?: string;
}

const Image = createHostComponent<ImageProps>('image');

export default Image;
