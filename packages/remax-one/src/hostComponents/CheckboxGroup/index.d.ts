/// <reference types="react" />
export interface CheckboxGroupProps {
    readonly dataset?: DOMStringMap;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    name?: string;
    onChange?: (e: any) => void;
}
declare const _default: import("react").ForwardRefExoticComponent<CheckboxGroupProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<{}>>;
export default _default;
