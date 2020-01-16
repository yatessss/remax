import * as React from 'react';
export interface ImageProps extends React.AriaAttributes {
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
    alipay_defaultSource?: string;
    weixin_webp?: string;
}
declare const Image: React.ForwardRefExoticComponent<ImageProps & {
    children?: React.ReactNode;
} & React.RefAttributes<{}>>;
export default Image;
