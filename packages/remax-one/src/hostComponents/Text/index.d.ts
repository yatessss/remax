import * as React from 'react';
export interface TextProps extends React.AriaAttributes {
    readonly dataset?: DOMStringMap;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    selectable?: boolean;
    space?: string;
    decode?: boolean;
    alipay_numberOfLines?: number;
}
declare const Text: React.ForwardRefExoticComponent<TextProps & {
    children?: React.ReactNode;
} & React.RefAttributes<{}>>;
export default Text;
