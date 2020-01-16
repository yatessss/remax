import * as React from 'react';
export interface FormProps {
    readonly dataset?: DOMStringMap;
    className?: string;
    style?: React.CSSProperties;
    onSubmit?: (e: any) => void;
    onReset?: (e: any) => void;
    alipay_reportSubmit?: boolean;
    weixin_reportSubmit?: boolean;
    weixin_reportSubmitTimeout?: number;
}
declare const Form: React.ForwardRefExoticComponent<FormProps & {
    children?: React.ReactNode;
} & React.RefAttributes<{}>>;
export default Form;
