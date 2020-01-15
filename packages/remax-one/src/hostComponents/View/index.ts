/* eslint-disable @typescript-eslint/camelcase */
import * as React from 'react';
import createHostComponent from '../../createHostComponent';

export interface ViewProps extends React.AriaAttributes {
  // 通用属性
  readonly dataset?: DOMStringMap;
  id?: string;
  slot?: string;
  className?: string;
  style?: React.CSSProperties;
  disableScroll?: boolean;
  hoverClassName?: string;
  hoverStartTime?: number;
  hoverStayTime?: number;
  animation?: any;
  hoverStopPropagation?: boolean;
  role?: string;
  onTap?: (e: any) => void;
  onTouchStart?: (e: any) => void;
  onTouchMove?: (e: any) => void;
  onTouchEnd?: (e: any) => void;
  onTouchCancel?: (e: any) => void;
  onLongTap?: (e: any) => void;
  onTransitionEnd?: (e: any) => void;
  onAnimationIteration?: (e: any) => void;
  onAnimationStart?: (e: any) => void;
  onAnimationEnd?: (e: any) => void;

  // 支付宝
  alipay_onAppear?: (e: any) => void;
  alipay_onDisappear?: (e: any) => void;
  alipay_onFirstAppear?: (e: any) => void;
}

const View = createHostComponent<ViewProps>('view');

export default View;
