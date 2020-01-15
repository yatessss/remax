import * as React from 'react';

export interface CanvasProps {
  // 通用属性
  readonly dataset?: DOMStringMap;
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  width?: string | number;
  height?: string | number;
  disableScroll?: boolean;
  onTap?: (e: any) => void;
  onTouchStart?: (e: any) => void;
  onTouchMove?: (e: any) => void;
  onTouchEnd?: (e: any) => void;
  onTouchCancel?: (e: any) => void;
  onLongTap?: (e: any) => void;

  // 微信
  weixin_type?: '2d' | 'webgl';
  weixin_binderror?: (e: any) => void;
}

export default class Canvas extends React.Component<CanvasProps> {
  render() {
    const style: React.CSSProperties = { ...this.props.style };
    if (typeof style.width === 'undefined') {
      style.width = this.props.width;
    }
    if (typeof style.height === 'undefined') {
      style.height = this.props.height;
    }
    return React.createElement('canvas', this.props);
  }
}
