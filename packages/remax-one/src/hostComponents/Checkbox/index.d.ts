/// <reference types="react" />
export interface CheckboxProps extends React.AriaAttributes {
    readonly dataset?: DOMStringMap;
    id?: string;
    className?: string;
    value?: string;
    checked?: boolean;
    disabled?: boolean;
    color?: string;
    alipay_onChange?: (e: any) => void;
}
declare const _default: import("react").ForwardRefExoticComponent<CheckboxProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<{}>>;
export default _default;
