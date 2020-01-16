import * as React from 'react';
export interface CanvasProps {
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
    weixin_type?: '2d' | 'webgl';
    weixin_binderror?: (e: any) => void;
}
export default class Canvas extends React.Component<CanvasProps> {
    render(): React.DetailedReactHTMLElement<Readonly<CanvasProps> & Readonly<{
        children?: React.ReactNode;
    }>, HTMLElement>;
}
