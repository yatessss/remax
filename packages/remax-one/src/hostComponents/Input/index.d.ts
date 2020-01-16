import * as React from 'react';
export interface InputProps {
    readonly dataset?: DOMStringMap;
    id?: string;
    className?: string;
    defaultValue?: string;
    value?: string;
    name?: string;
    type?: string;
    password?: boolean;
    placeholder?: string;
    placeholderStyle?: React.CSSProperties;
    placeholderClass?: string;
    disabled?: boolean;
    maxlength?: number;
    focus?: boolean;
    confirmType?: 'done' | 'go' | 'next' | 'search' | 'send';
    confirmHold?: boolean;
    cursor?: number;
    selectionStart?: number;
    selectionEnd?: number;
    randomNumber?: boolean;
    onInput?: (e: any) => void;
    onConfirm?: (e: any) => void;
    onFocus?: (e: any) => void;
    onBlur?: (e: any) => void;
    weixin_adjustPosition?: boolean;
    weixin_holdKeyboard?: boolean;
    weixin_bindkeyboardheightchange?: (e: any) => void;
}
export interface InputState {
    value?: string;
    controlled: boolean;
}
export default class Input extends React.Component<InputProps, InputState> {
    state: InputState;
    constructor(props: InputProps);
    handleInput: (e: any) => void;
    render(): React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
}
